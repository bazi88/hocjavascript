const expressJwt = require('express-jwt');
const config = require('../config/config.json');

function jwt() {
    const secret = config.secret;
    return expressJwt({ secret:config.secret }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/admin',
            '/users',
            '/users/register',
        ]
    });
}
module.exports = jwt;
