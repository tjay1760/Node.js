function greet (name){
    console.log(`Hello there im ${name}`)
}
function greetme(greetFn){
    const name = "Tjay"
    greetFn(name)
}

greetme(greet)