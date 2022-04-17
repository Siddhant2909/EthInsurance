import * as React from 'react'
import { useWeb3React } from '@web3-react/core'
import { injected } from '../connector'
import { Button } from '@mui/material'

export default function Connect() {
	const { active, activate, deactivate } = useWeb3React()

	async function connect() {
		try {
			await activate(injected)
		} catch (ex) {
			console.log(ex)
		}
	}

	async function disconnect() {
		try {
			deactivate()
		} catch (ex) {
			console.log(ex)
		}
	}

	return (
		<div>
			{active ? (
				<Button
					onClick={disconnect}
					type='submit'
					variant='contained'
					sx={{ mt: 3, mb: 2 }}>
					Disconnect
				</Button>
			) : (
				<Button
					onClick={connect}
					type='submit'
					variant='contained'
					sx={{ mt: 3, mb: 2 }}>
					Connect to MetaMask
				</Button>
			)}
		</div>
	)
}
