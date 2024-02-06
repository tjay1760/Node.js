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

const user = getUser(5);
user.then(e=>console.log(`the user is ${e.username} and his id in ${e.id}`))
