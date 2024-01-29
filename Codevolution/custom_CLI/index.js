#!/usr/bin/env node
console.log("Wow Yo made your CLI")
const fetchPokeMoves = async (pokemon)=>{
const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
const data = await response.json()
const abilities = data.abilities.map((ability)=>
    ability.ability.name
)
console.log(abilities)
}
fetchPokeMoves("8")