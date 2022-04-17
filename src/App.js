import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Router from './Router'
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import ContractProvider from './ContractProvider'

function getLibrary(provider) {
	return new Web3(provider)
}

function App() {
	return (
		<Web3ReactProvider getLibrary={getLibrary}>
			<ContractProvider>
				<BrowserRouter>
					<Navbar />
					<Router />
				</BrowserRouter>
			</ContractProvider>
		</Web3ReactProvider>
	)
}

export default App
