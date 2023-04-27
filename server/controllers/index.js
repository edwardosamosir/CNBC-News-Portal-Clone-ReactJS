const { User, Post, Category, Tag, sequelize } = require('../models')
const { compareHash } = require("../helpers/password-hashing-bcrypt");
const { encodeToken } = require("../helpers/jwt-encode-decode");

class Controller {
  static async registerUserAdmin(req, res, next) {
    const { username, email, password, phoneNumber, address } = req.body;

    try {
      const newAdmin = await User.create({
        username,
        email,
        password,
        role: "Admin",
        phoneNumber,
        address
      });

      res.status(201).json({
        id: newAdmin.id,
        email: newAdmin.email,
        message: `User with email ${newAdmin.email} and username ${newAdmin.username} is succesfully registered`
      });
    } catch (err) {
      next(err);
    }
  }

  static async loginUser(req, res, next) {
    const { email, password } = req.body;

    try {
      if (!email) {
        throw { name: "email_is_required" };
      }
      if (!password) {
        throw { name: "password_is_required" };
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "wrong_email_or_password" };
      }

      const isPasswordCorrect = compareHash(password, user.password);
      if (!isPasswordCorrect) {
        throw { name: "wrong_email_or_password" };
      }

      const encodedToken = encodeToken({ id: user.id });

      res.status(200).json({
        access_token: encodedToken,
        username: user.username,
        email: user.email,
        role: user.role,
        message: `${user.username} is successfully logged in`
      });
    } catch (err) {
      next(err);
    }
  }

  static async getAllPosts(req, res, next) {
    try {
      const allPosts = await Post.findAll({
        include: [{
          model: User,
          as: 'author',
          attributes: ['id', 'email']
        }, {
          model: Category,
          attributes: ['id', 'name']
        }, {
          model: Tag,
          attributes: ['id', 'name']
        }],
        order: [['updatedAt', 'DESC']]
      })

      res.status(200).json(allPosts)
    } catch (err) {
      next(err)
    }
  }

  static async getPostById(req, res, next) {
    try {
      const { id: postId } = req.params

      const detailPost = await Post.findByPk(postId, {
        include: [{
          model: User,
          as: 'author',
          attributes: ['id', 'email']
        }, {
          model: Category,
          attributes: ['id', 'name']
        }, {
          model: Tag,
          attributes: ['id', 'name']
        }],
      })

      if (!detailPost) throw { name: 'NotFound' }

      res.status(200).json(detailPost)
    } catch (err) {
      next(err)
    }
  }

  static async deletePostById(req, res, next) {
    try {
      const { id: postId } = req.params

      const postData = await Post.findOne({
        where: {
          id: postId
        }
      })

      if (!postData) throw { name: 'NotFound' }

      await postData.destroy()

      res.status(200).json({ message: 'Post successfully deleted' })
    } catch (err) {
      next(err)
    }
  }

  static async editPostById(req, res, next) {
    try {
      const { id: postId } = req.params
      const { title, imgUrl, content, categoryId } = req.body

      const detailPost = await Post.findByPk(postId)

      if (!detailPost) throw { name: 'NotFound' }

      await detailPost.update({
        title,
        imgUrl,
        content,
        categoryId
      })

      res.status(200).json({ message: 'Post is successfully modified' })
    } catch (err) {
      next(err)
    }
  }

  static async addPostWithTag(req, res, next) {
    const t = await sequelize.transaction()
    try {
      const { title, imgUrl, content, categoryId, tags } = req.body

      const addedPost = await Post.create({
        title, imgUrl, content, categoryId,
        slug: title.replaceAll(' ', '-'),
        authorId: req.user.id
      }, { transaction: t })

      await Tag.bulkCreate(tags.map(tag => {
        return {
          name: tag,
          postId: addedPost.id
        }
      }), { validate: true, transaction: t })

      await t.commit()

      res.status(201).json({ message: 'Post has successfully created' })
    } catch (err) {
      t.rollback()
      next(err)
    }
  }

  static async getTags(req, res, next) {
    try {
      const allTags = await Tag.findAll({
        include: {
          model: Post,
          attributes: ['title']
        }
      })

      res.status(200).json(allTags)
    } catch (err) {
      next(err)
    }
  }

  static async getAllCategories(req, res, next) {
    try {
      const allCategories = await Category.findAll({
        include: {
          model: Post,
          attributes: ['id', 'title']
        },
        order: [['createdAt', 'ASC']]
      })

      res.status(200).json(allCategories)
    } catch (err) {
      next(err)
    }

  }

  static async addCategory(req, res, next) {
    try {
      const { name } = req.body

      const addedCategory = await Category.create({
        name
      })

      res.status(201).json(addedCategory)
    } catch (err) {
      next(err)
    }
  }

  static async getCategoryById(req, res, next){
    try {
        const {id : categoryId} = req.params

        const detailCategory = await Category.findOne({
            where : {
                id : categoryId
            }
        })
        // console.log(detailCategory)
        if(!detailCategory) throw {name : 'NotFound'}

        res.status(200).json(detailCategory)
    } catch (err) {
        next(err)
    }
}

static async editCategoryById(req, res, next){
  try {
      const {id : categoryId} = req.params
      const {name : categoryName} = req.body

      const detailCategory = await Category.findOne({
          where : {
              id : categoryId
          }
      })
      // console.log(detailCategory)
      if(!detailCategory) throw {name : 'NotFound'}

      await detailCategory.update({name : categoryName})
      
      res.status(200).json({message : 'Category has successfully updated'})
  } catch (err) {
      next(err)
  }
}

static async deleteCategoryId(req, res, next){
  try {
      const {id : categoryId} = req.params

      const detailCategory = await Category.findOne({
          where : {
              id : categoryId
          }
      })

      if(!detailCategory) throw {name : 'NotFound'}

      await detailCategory.destroy()

      res.status(200).json({message : 'Category has successfully deleted'})
  } catch (err) {
      next(err)
  }
}


}

module.exports = Controller
