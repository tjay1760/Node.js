const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected to MMongodb Succesfully")).catch(err=>(console,log(`FAiled to connect:: ${err}`)))
const courseSchema = new mongoose.Schema({
    name:{type:String, required:true},
    author:"string",
    tags:[String],
    date: {type:Date, default: Date.now()},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function (){ return this.isPublished;}
    }
});
const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
        name:"Rails",
        author:"baster",
        tags:["front-end","javascript","DOM"],
        isPublished: true,
        price: 36
    });
    try{
        const result = await course.save();
        console.log(result)
    } catch (ex) {
console.log(`${ex.message}`)
    }

}
async function getCourses(){
const courses = await Course.find({author:/^/})
console.log(courses)
}
// getCourses();

async function updateCourse(id){
const result = await Course.updateOne(
    {_id:id},{
        $set: {
author: "Mr. Jayjay",
isPublished:false
        }
    }
)
console.log(result)
}
async function removeCourse(id){
    const result = await Course.deleteOne({
        _id:id
    })
    console.log(result)
}
createCourse()