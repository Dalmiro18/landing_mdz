const userCtrl = {};
const User = require('../models/users');

userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user = new User(req.body);
    await user.save();
    // console.log(user);
    res.json({
        'status': 'User saved'
    });
}

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.deleteUser = async (req, res) => {
    const id = (req.params.id);
    await User.findByIdAndRemove(id);
    res.json({
        "status":"User deleted"
    })
}

module.exports = userCtrl;