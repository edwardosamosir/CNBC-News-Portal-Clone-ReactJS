'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, {as : 'author', foreignKey: "authorId" })
      Post.belongsTo(models.Category, {foreignKey: "categoryId"})
      Post.hasMany(models.Tag, {foreignKey: "postId"})
    }
  }
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Title is required!" },
        notEmpty: { msg: "Title is required!" },
      }
    },
    slug: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Slug is required!" },
        notEmpty: { msg: "Slug is required!" },
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notNull: { msg: "Content is required!" },
        notEmpty: { msg: "Content is required!" },
      }
    },
    imgUrl: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    authorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};