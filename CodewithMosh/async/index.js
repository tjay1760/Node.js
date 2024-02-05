const getUser = (id, callback)=>{
    setTimeout(()=>{
        console.log("Reading user from DB")
        callback({id:id, username:"tjay"})
    })
}
const getRepos = (username, callback)=>{
    setTimeout(()=>{
        callback(['repo1','repo2','repo3'])
    },2000)

}
console.log("Before");
getUser(5,(user)=>{
console.log(`The user ${user.id} is ${user.username}`)
})
getRepos("tjay",(repos)=>{
repos.forEach(repo => {
    console.log(`This is a ${repo}`)
});
})
console.log("After");

