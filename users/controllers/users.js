const userModel = require('../models/user');

exports.createUser = (req, res) => {
    const user = userModel.create(req.body);
    res.status(200).json(user);
};
