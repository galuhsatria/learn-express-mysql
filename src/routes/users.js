const express = require('express');
const usersControler = require('../controller/users.js');

const router = express.Router();


// get data
router.get('/', usersControler.getAllUsers);

// create data
router.post('/', usersControler.createUsers);

// update data
router.patch('/:id', usersControler.updateUser);

// delete data
router.delete('/:id', usersControler.deleteUser);

module.exports = router;
