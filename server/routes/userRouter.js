const Router =require('express')
const userConroller = require('../controllers/userConroller')
const router = new Router()
const UserController = require('../controllers/userConroller')
router.post('/registration', UserController.registration)
router.post('/login',UserController.login)
router.get('/auth',UserController.check) 


module.exports = router