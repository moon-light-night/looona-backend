import Router from "express"
import passport from "passport"

const router = new Router()

router.get('/about', passport.authenticate('jwt', {session: false}))

export default router