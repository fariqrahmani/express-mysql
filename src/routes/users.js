const express = require('express');
const router = express.Router();
const userController = require('../controller/users.js')

//CREATE - POST
router.post('/', userController.createNewUser);

//READ - GET
router.get('/', userController.getAllUsers);

//UPDATE - PATCH (sebagian update. Perlu id data. Kalau PUT >> Seluruh)
router.patch('/:id', userController.updateUser)

//DELETE - DELETE
router.delete('/:id', userController.deleteUser)

module.exports = router;