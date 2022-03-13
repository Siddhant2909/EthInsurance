import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Router from './Router'

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Router />
		</BrowserRouter>
	)
}

export default App
