const express = require('express');
const router = express.Router();
const User = require("../models/user")
const { v4: uuidv4 } = require('uuid');

// create new user 

router.post('/createUser', async (req, res) => {
    const { name, email, number, age } = req.body;
    try {
        const newUser = new User({
            userId:uuidv4(),
            name, 
            email,
            number,
            age,
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// get user information 

router.get('/user/:id', async (req, res) => {
    const {id} = req.params;
    try {
        const users = await User.find({userId:id});
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});
module.exports = router;