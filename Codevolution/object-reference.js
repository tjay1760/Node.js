const obj1 = {
    name:"Bruce Wayne"
}
const obj2 = obj1;
obj2.name = "Matt Dameon";
console.log(obj1.name)
module.exports = {obj1}
console.log(module)