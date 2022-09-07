
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom"
import Home from '../Home/Home';
import DadJokePage from '../DadJokePage/DadJokePage';
import PokemonPage from '../PokemonPage/PokemonPage';


function App() {

  // code here
  return (
		<Router className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
        <Route path='/dadjokes' element={<DadJokePage />}></Route>
        <Route path='/pokemon' element={<PokemonPage />}></Route>
			</Routes>
		</Router>
	)
}

export default App
