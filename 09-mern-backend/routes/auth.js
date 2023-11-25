
/*
    Routes of users / Auth
    path: host + /api/auth

    In this moment the path is: localhost:4000/api/auth
*/

const {Router} = require('express');
const {check} = require('express-validator');
const bodyParser = require('body-parser');
const {validateFields} = require('../middlewares/validate-fields');

const router = Router();

const jsonParser = bodyParser.json();

const {createUser, loginUser, revalidateToken} = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt');

router.post( '/new',
    jsonParser,
    [ // Midlewares
      check('name', 'The name is necessary required').not().isEmpty(),
      check('email', 'The email is incorrect').isEmail(),
      check('password', 'Password shoul have at least 6 characters').isLength({min: 6}),
      validateFields
    ],
    createUser,
);

router.post( '/', 
    jsonParser,
    [ // Midlewares
      check('email', 'The email is incorrect').isEmail(),
      check('password', 'Password shoul have at least 6 characters').isLength({min: 6}),
      validateFields
    ],
    loginUser
);

router.get( '/renew', 
    jsonParser,
    validateJWT,
    revalidateToken
);

module.exports = router;

/*  IMPORTANT TOO get req.body

npm i body-parser

// then in your app
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
 
// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})
 
// POST /api/users gets JSON bodies
app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
}

*/


