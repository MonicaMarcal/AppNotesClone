let express = require('express');
let path = require('path');
let logger = require('morgan');
let cors = require('cors')

require ('./config/database')
let usersRouter = require('./app/routes/users');
let app = express();

let notesRouter = require('./app/routes/notes');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', usersRouter);
app.use('/notes', notesRouter);


module.exports = app;
