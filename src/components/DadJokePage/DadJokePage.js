import React from "react";
import "./style.css"
import useFetchApi from "../useFetchApi/useFetchApi";
import dadjoke1 from "../../images/dadjoke1.png";
import dadjoke2 from "../../images/dadjoke2.png"

export default function DadJokePage() {
	const [response, setRanNum] = useFetchApi(
		`https://icanhazdadjoke.com/`
	);
	console.log("on render", response);

	async function handleClick() {
		let joke = response.joke;
		console.log("from getDadJoke()", joke);
		setRanNum(Math.random() * 20);
	}

	return (
		<>
			<div className='dadjoke-container'>
				<img
					src={dadjoke1}
					className='speech-logo'
					alt='logo'
				></img>
                	<img
					src={dadjoke2}
					className='dad-logo'
					alt='logo'
				></img>
			</div>
			<p>{response.joke}</p>
            <div className="button-constainer">
			<button className="dad-button" onClick={handleClick}>Get Dad Joke</button>
            </div>
		</>
	);
}
