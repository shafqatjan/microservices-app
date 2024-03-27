const notificationsModel = require('../models/notification');

exports.receiveMessage = (req, res) => {
    const message = notificationsModel.receive();
    res.status(200).json(message);
};
