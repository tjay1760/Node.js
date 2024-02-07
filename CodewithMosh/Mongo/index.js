const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected to MMongodb Succesfully")).catch(err=>(console,log(`FAiled to connect:: ${err}`)))
const courseSchema = new mongoose.Schema({
    name:"string",
    author:"string",
    tags:[String],
    date: {type:Date, default: Date.now()},
    isPublished: Boolean
});
const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
        name:"REact",
        author:"Theo",
        tags:["front-end","javascript","DOM"],
        isPublished: true
    });
    const result = await course.save();
    console.log(result)
}
async function getCourses(){
const courses = await Course.find({author:"Theo"}).select({name:1,tags:1});
console.log(courses)
}
getCourses();
// createCourse();
// Mongo shortcuts
// eq --> equal
// ne --> not equal
// gt --> greater than
// gte --> gt than eq to
// lt --> less than
// lte --> less than equal to
// in 
// nin --> not in