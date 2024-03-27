const fs = require('fs');

exports.receive = () => {
    // Here you would typically listen for a message from the message broker
    // But for this example, we'll just log a mock message to a log file
    const message = { text: 'Mock message from the message broker' };
    const dataString = JSON.stringify(message) + '\n';

    fs.appendFile('log.txt', dataString, err => {
        if (err) {
            console.error(err);
            return 'Error';
        }
    });

    return message;
};
