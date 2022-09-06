const express = require('express');
const { getUser,getUserById,createUser,updateUser,deleteUser } = require('../controllers/users.controller.js');


const routerUser=express.Router();

routerUser.get('/',getUser);
routerUser.get('/:id',getUserById);
routerUser.post('/',createUser);
routerUser.put('/:id',updateUser);
routerUser.delete('/:id',deleteUser);

module.exports.routerUser=routerUser;