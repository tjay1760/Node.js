const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongo-exercises')
.then(()=>console.log("Database connection succesful"))
.catch(err=>console.log(err))


const courseSchema = new mongoose.Schema({
    name:"string",
    author:"string",
    tags:[String],
    date: {type:Date, default: Date.now()},
    isPublished: Boolean,
    price: Number
});
const Course = mongoose.model('Course',courseSchema);

async function getCourses(){
    console.log("gettiing courses")
const courses = await Course.find({name:/.*by.*/i, isPublished:true})
    console.log(courses)
}
getCourses()