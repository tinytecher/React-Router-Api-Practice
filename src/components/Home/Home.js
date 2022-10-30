import React from "react";
import { NavLink } from "react-router-dom";
import fetch from "../../images/fetch.png";
import "./style.css";

export default function Home() {
	return (
		<>
			<div>
				<div className='logo-container'>
					<img
						src={fetch}
						className='fetch-logo'
						alt='logo'
					></img>
				</div>

				<nav className='navbar-container'>
					<ul className='nav-ul'>
						<li className='nav-li'>
							<NavLink to='/'>Home</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/dadjokes'>
								Dad Jokes Api
							</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/Pokemon'>Pokemon Api</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<h3 className='home-title'>
				Practice and play with Api's, using React Router
			</h3>
			<div className='home-container'>
				<p className="home-para">
					"Lorem ipsum dolor sit amet, consectetur
					adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua. Ut enim ad minim
					veniam, quis nostrud exercitation ullamco laboris
					nisi ut aliquip ex ea commodo consequat. Duis aute
					irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident,
					sunt in culpa qui officia deserunt mollit anim id
					est laborum."
				</p>
			</div>
		<div className="squares">
			<div className="dad-container">
			<a href='/dadjokes' className='dad-joke-square'>Dad Jokes</a>
			</div>
			<div className="pokemon-container">
			<a href='/pokemon' className='pokemon-square'>Pokemon Battle</a>
			</div>
		</div>
		</>
	);
}
