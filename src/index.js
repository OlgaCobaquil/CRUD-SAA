const express = require('express');
const morgan =  require('morgan');
const path = require('path');
const app = express();

const { mongoose} = require('./database');

//settings
app.set('port', process.env.PORT || 3000);

//middelwares
app.use(morgan('dev'));
//evaluar si es json o no
app.use(express.json());

//routes
app.use('/api/task', require('./routes/task.routes'));

//static files
app.use(express.static(path.join(__dirname,'public')));


//servidor escucha en el puerto 3000
app.listen(app.get('port'), ()=> {
    console.log(`Server on port ${app.get('port')}`);
});