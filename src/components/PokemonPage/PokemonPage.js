import React from 'react'
import useFetchApi from '../useFetchApi/useFetchApi'
import { useState } from 'react';

export default function PokemonPage() {

    const [id, setId] = useState(
		Math.floor(Math.random() * 20) + 1
	);

	const [ response ] = useFetchApi(
		`https://pokeapi.co/api/v2/pokemon/${id}`
	);
    console.log("from GetPokemon", response);

    function handleClick() {
        // TODO: Set id to be random number between 1 and 151
		//create function that "picks" random number (math.random)
		const randomID = Math.floor(Math.random() * 151) + 1;
		console.log(randomID);
        console.log("getPokemonForHook", response.name); 
		// return that number(id)
		setId(randomID);
	}


  return (
    <div className='pokemon-viewer'>
    <div className='pokemon-viewer'>
        <button onClick={handleClick}>
            Get Random Pokemon
        </button>
        <p>Name: {response.name}</p>
        {response.moves && (
            <>
         <p>First Move: {response.moves[0].move.name}</p>
         <p>Second Move: {response.moves[1].move.name}</p>
            </>
        )} 
        <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt='pokemon'
        ></img>
        {/* <p>display pokemon with id {id} here!</p> */}
    </div>
</div>
  )
}
