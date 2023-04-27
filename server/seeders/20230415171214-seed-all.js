'use strict';

const { hashPassword } = require('../helpers/password-hashing-bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const {users, posts, categories, tags} = require('../db_seeders.json')
    // const posts = JSON.parse(postsRaw)
    
    await queryInterface.bulkInsert('Users', users.map(el => {
      const {username, email, password, role, phoneNumber, address} = el
      return {
        username, email, phoneNumber, address, role,
        password : hashPassword(password),
        createdAt : new Date(),
        updatedAt : new Date()
      }
    }))

    await queryInterface.bulkInsert('Categories',categories.map(el => {
      const {name, updatedAt, createdAt} = el
      return {
        name, updatedAt, createdAt
      }
    }))

    await queryInterface.bulkInsert('Posts',posts.map(el => {
      const {title, content, slug, imgUrl, categoryId, authorId, updatedAt, createdAt } = el
      return {
        title, content, slug, imgUrl, categoryId, authorId, updatedAt, createdAt
      }
    }))

    await queryInterface.bulkInsert('Tags', tags.map(el => {
      const {name, postId, createdAt, updatedAt} = el
      return {
        name, postId, createdAt, updatedAt
      }
    }))

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Tags',null,{})
    await queryInterface.bulkDelete('Posts',null,{})
    await queryInterface.bulkDelete('Categories',null,{})
    await queryInterface.bulkDelete('Users',null,{})
  }
};
