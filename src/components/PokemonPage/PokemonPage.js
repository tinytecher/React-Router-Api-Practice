import React from 'react'
import "./style.css"
import useFetchApi from '../useFetchApi/useFetchApi'
import { useState } from 'react';

export default function PokemonPage() {

    const [id, setId] = useState(
		Math.floor(Math.random() * 20) + 1
	);
    const [idTwo, setIdTwo] = useState(
		Math.floor(Math.random() * 20) + 1
	);
    console.log("id two", idTwo)

    const [ response ] = useFetchApi(
		`https://pokeapi.co/api/v2/pokemon/${id}`
	);
    // console.log("from GetPokemon one", response);

	const [ responseTwo ] = useFetchApi(
		`https://pokeapi.co/api/v2/pokemon/${idTwo}`
	);
    // console.log("from getPokemon Two", responseTwo)

    function handleClick() {
        // TODO: Set id to be random number between 1 and 151
		//create function that "picks" random number (math.random)
		const randomID = Math.floor(Math.random() * 151) + 1;
		console.log(randomID);
        console.log("getPokemonForHook one", response.name); 
		// return that number(id)
		setId(randomID);
	}

    function handleClickTwo() {
        // TODO: Set id to be random number between 1 and 151
		//create function that "picks" random number (math.random)
		const randomIDTwo = Math.floor(Math.random() * 151) + 1;
		console.log(randomIDTwo);
        console.log("getPokemonForHook two", responseTwo.name); 
		// return that number(id)
        setIdTwo(randomIDTwo)
	}


  return (
    <div className='pokemon-container'>
    <div className='pokemon-one'>
        <p>{response.name}</p>
        {response.moves && (
            <>
                <p>Attack: {response.stats[1].base_stat}</p>
            </>
        )} 
        <img className='pokemon-image'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            alt='pokemon'
        ></img>
        <button onClick={handleClick}>
            Get Random Pokemon One
        </button>
        <div className='pokemon-two'>
        <p>{responseTwo.name}</p>
        {responseTwo.moves && (
            <>
                <p>Attack: {responseTwo.stats[1].base_stat}</p>
            </>
        )}
        <img className='pokemon-image'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idTwo}.png`}
            alt='pokemon'
        ></img>
        <button onClick={handleClickTwo}>
            Get Random Pokemon Two
        </button>
        </div>
        
    </div>
    </div>
    
  )
}
