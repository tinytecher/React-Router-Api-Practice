import React from 'react'
import { NavLink } from "react-router-dom";
import fetch from "../../images/fetch.png"

export default function Home() {
    return (
		<>
			<div>
				<nav className='navbar-container'>
					<div className='left-nav'>
						<img
							src={fetch}
							className='fetch-logo'
							alt='logo'
						></img>
					</div>
					<ul className='nav-ul'>
						<li className='nav-li'>
            <NavLink to='/'>Home</NavLink>
						</li>
						<li className='nav-li'>
							<NavLink to='/dadjokes'>Dad Jokes Api</NavLink>
						</li>
						<li className='nav-li'>
            <NavLink to='/Pokemon'>Pokemon Api</NavLink>
						</li>
					</ul>
				</nav>
			</div>

			<div className='home-container'>
				{/* <h2 className='home-title'>Get Some Apis</h2> */}
				<h3>Practice and play with Api's, using React Router</h3>
				<p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
				eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
				minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
				ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
				voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
				sint occaecat cupidatat non proident, 
				sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
		
			</div>
		</>
	)
}