const getUser = ()=>{
    setTimeout((id)=>{
        console.log("Reading user from DB")
        return {id:id, username:"tjay"}
    })
}
console.log("Before");
const user = getUser(5)
console.log(user)
console.log("After");

