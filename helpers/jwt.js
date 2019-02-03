const expressJwt = require('express-jwt');
const config = require('../config.json');

function jwt() {
    const { secret } = config;
    return expressJwt({
        secret : secret
      }).unless({
          path:[
            '/',
            '/admin',
          ]}
      )
}

module.exports = jwt;
