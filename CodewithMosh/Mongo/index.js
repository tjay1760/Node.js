const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground')
.then(()=>console.log("Connected to MMongodb Succesfully")).catch(err=>(console,log(`FAiled to connect:: ${err}`)))
const courseSchema = new mongoose.Schema({
    name:{
        type:String, 
        required:true,
        minlength: 5,
        maxlength: 25
    },
    category: {
 type: String,
 required: true,
 enum: ['web','mobile','network','os']
    },
    author:"string",
    tags:{
type: Array,
validate: {
    validator: function (v){return v.length>0},
},
message: "Tags should not be an empty array"
    },
    date: {type:Date, default: Date.now()},
    isPublished: Boolean,
    price: {
        type: Number,
        required: function (){ return this.isPublished;},
        min: 20,
        max: 100,
    }
});
const Course = mongoose.model('Course',courseSchema);

async function createCourse(){
    const course = new Course({
        name:"Rails",
        author:"baster",
        // tags:[],
        category: "web",
        isPublished: true,
        price: 30
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