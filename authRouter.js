import Router from "express"
import controller from './authController.js'
import { check } from 'express-validator'

const router = new Router()

router.post('/registration', [
    check('username', `Field <username> mustn't be empty`).notEmpty(),
    check('password', `Field <password> must be between 4 and 10 symbols`).isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)

export default router