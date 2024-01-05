const router = require('express').Router()
const User = require('../models/User')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err))
});

router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const date = Date.parse(req.body.date);

    const email = req.body.email;
    const password = req.body.password;
    // console.log(date[])
    const newUser = new User({username, date, email, password})

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json("Error: "+ err))
})



module.exports = router;