const getUser = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(`Reading user ${id} from DB`)
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
let val;
getUser(6)
.then(e=>getRepos(e.username)
.then(getCommits("repo")
.then(c=>{console.log(c) 
val = c})))
console.log(val)
setTimeout(()=>{
console.log(val)
},7000)
