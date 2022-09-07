import React from 'react'
import useFetchApi from '../useFetchApi/useFetchApi';

export default function DadJokePage() {
    const [response, setRanNum] = useFetchApi( `https://icanhazdadjoke.com/`);
    console.log("on render", response)

    async function handleClick() {
        let joke = response.joke
        console.log("from getDadJoke()", joke);
        setRanNum(Math.random() * 20) 
      }

  return (
    <>
    <div>Dad Jokes</div>
    <p>{response.joke}</p>
    <button onClick={handleClick}>Get Dad Joke</button>
    </>
  )
}
