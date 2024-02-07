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
const courses = await Course.find({author:/^/})
console.log(courses)
}
// getCourses();

async function updateCourse(id){
const course = await Course.findById(id)
if(!course) {
    console.log("course not found")
    return;
}
course.isPublished = true;
course.author = "New author"
const result = await course.save();
console.log(result)
}
updateCourse('65c2d822d60202c9ca17cbca')