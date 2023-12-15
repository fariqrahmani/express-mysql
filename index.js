const express = require('express');
const app = express();
const userRoutes = require('./src/routes/users.js');
const middlewareLogRequest = require('./src/middleware/logs.js');

// app.use('/', (req, res, next) => res.send('Hello World!'));
app.use(middlewareLogRequest.logRequest);
app.use(express.json());
app.use('/users', userRoutes);

app.listen(4000, () => { console.log('Server berhasil di running di port 4000') })