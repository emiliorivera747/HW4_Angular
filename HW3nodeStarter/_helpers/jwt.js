const expressJwt = require('express-jwt');
const userService = require('../services/user.service');
const config = require('../config.json');

module.exports = jwt;

//expressJwt(...) returns a function that takes three paramaters req, res and next. Thus, this will register as middleware.
function jwt() {
const secret = config.secret;
    return new expressJwt({ secret , isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/user/register',
            '/user/authenticate'
        ]
    });}


    //Helper function that is used to determine if the token e
async function isRevoked(req, payload, done) {
   // console.log("isRevoked():", req.body, payload);

    // gets the user via the 'sub' part of the JWT token.
    const user = await userService.getByUsername(payload.sub);

    // revoke token if user no longer exists
    if (!user) {

        return done(null, true);
    }

    // done (Function) - A function with signature function(err, secret) to be invoked when the secret is retrieved.
    done();
};
