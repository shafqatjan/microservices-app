const express = require('express');
const bodyParser = require('body-parser');
const notificationsRoutes = require('./routes/notifications');
const app = express();

app.use(bodyParser.json());
app.use('/', notificationsRoutes);

app.listen(3001, () => console.log('Notifications service listening on port 3001'));
