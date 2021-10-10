import Router from "express"
import passport from "passport"
import controller from '../controllers/auth.js'
import authMiddleware from '../middleware/authMiddleware.js'
import roleMiddleware from '../middleware/roleMiddleware.js'
import { check } from 'express-validator'

const router = new Router()

router.post('/registration', [
    check('username', `Field <username> mustn't be empty`).notEmpty(),
    check('password', `Field <password> must be between 4 and 10 symbols`).isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)
router.get('/users', [
    authMiddleware,
    roleMiddleware(['ADMIN']),
    passport.authenticate('jwt', {session: false})
], controller.getUsers)

export default router