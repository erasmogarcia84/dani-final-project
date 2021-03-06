const express = require('express')
const userController = require('../controllers/userController')
const usersController = require('../controllers/usersController')
const authController = require('../controllers/authController')

function userRouter (User) {
  const router = express.Router()
  const user = userController(User)
  const users = usersController(User)
  const auth = authController(User)

  router.route('/')
    .get(users.getMethod)

  router.route('/:userId')
    .get(user.getMethod)
    .patch(user.patchMethod)
    .delete(user.deleteMethod)

  router.route('/auth/:sub')
    .get(auth.getMethod)
    .post(auth.postMethod)

  return router
}

module.exports = userRouter
