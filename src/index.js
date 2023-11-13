require('dotenv').config();
const port = process.env.PORT || 5000;
const express = require('express');
const usersRoute = require('./routes/users.js');
const middlewareLogRequest = require('./middleware/logs.js');
const app = express();

app.use(middlewareLogRequest);

app.use(express.json());

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
