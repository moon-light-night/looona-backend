import { Strategy } from 'passport-jwt'
import { ExtractJwt } from 'passport-jwt'
import User from '../models/User.js'
import config from '../config.js'

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret
}

export default passport => {
    passport.use(
        new Strategy(options, async (payload, done) => {
            try {
                const user = await User.findById(payload.id).select('username id')
                if (user) {
                    done(null, user)
                }   else {
                    done(null, false)
                }
            } catch (error) {
                console.log(error)
            }
        })
    )
}