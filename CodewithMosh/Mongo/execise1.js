const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>console.log("Database connection succesful"))
.catch(err=>console.log(err))