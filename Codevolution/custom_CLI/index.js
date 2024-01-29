#!/usr/bin/env node
const inquirer = require("inquirer")
console.log("Wow Yo made your CLI")
const fetchPokeMoves = async (pokemon)=>{
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
const data = await response.json()
const abilities = data.abilities.map((ability)=>
    ability.ability.name
)
console.log(abilities)
}
const prompt = inquirer.createPromptModule()
prompt([{
    type:"input",
    name:"pokemon",
    message:"Enter pokemon value"
}]).then((answers)=>{
const pokemon = answers.pokemon
console.log("PPokemon val",pokemon)
fetchPokeMoves(pokemon)
})
