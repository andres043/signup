/*
 * @Author: Andres Leal 
 * @Date: 2019-02-12 17:46:38 
 * @Last Modified by: Andres Leal
 * @Last Modified time: 2019-02-14 14:17:45
 */

const express = require('express');
const router = express.Router();
const userManager = require('../bussines/manager/userManager');
const userValidate = require('./../bussines/validateRequest/userValidate');
const userToken = require('./../bussines/tokenValidate/userToken');

router.post('/signup', userValidate.signup, userManager.signup);
router.post('/login', userManager.login);
router.get('/data', userToken.token, userManager.getData);
router.get('/', userManager.getUsers);

module.exports = router;