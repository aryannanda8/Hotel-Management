const express = require('express');
const User = require('../Model/user');
const router = express.Router();

router.post('/', async (req, res) => {
    const { name, username, password, Address, mobileNumber, isAdmin, Responsibility } = req.body;
    await User.create({ name, username, password, Address, mobileNumber, isAdmin, Responsibility })
        .then((response) => {
            res.send(response);
        })
})


module.exports = router;