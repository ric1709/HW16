import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import NewLogin from './components/NewLogin'


function App() {
	const [isValidet, setIsValidet] = useState(false)
	
	return (
		<div className='App'>
			{!isValidet && <NewLogin  setIsvalidet={setIsValidet} />}
			{isValidet && <Login />}
		</div>
	)
}

export default App
