const morgan = require('morgan');
const express = require('express');
const startupDebugger = require('debug')('app:startup')
const databaseDebugger = require('debug')('app:db')
const app = express();

if(app.get('env')=== 'development'){
    app.use(morgan('tiny'))
    startupDebugger("Morgan Enabled")
}
const port = process.env.PORT || 3000;

databaseDebugger("connected to the Db")

app.listen(port, ()=>`Server is running at ${port}`)