const fs = require('fs');

exports.create = (userData) => {
    // Convert the user data to a string
    const dataString = JSON.stringify(userData) + '\n';

    // Append the data string to the log file
    fs.appendFile('log.txt', dataString, err => {
        if (err) {
            console.error(err);
            return 'Error';
        }
    });

    return userData;
};
