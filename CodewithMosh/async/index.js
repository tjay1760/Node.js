const getUser = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading user from DB")
            resolve({id:id, username:"tjay"})
        })
    })

}



const getRepos = (username)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("reading repositories")
            resolve(['repo1','repo2','repo3'])
        },2000)
    })
}
const getCommits = (repo)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Calling Git API...")
            resolve(['commit'])
        },2000)
    })
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

