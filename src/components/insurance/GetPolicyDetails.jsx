import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography
} from '@mui/material'
import React, { useState } from 'react'
import contract from '../../contract'
import web3 from '../../web3'

const GetPolicyDetails = () => {
	const [policyId, setPolicyId] = useState('')
	const [policy, setPolicy] = useState(null)

	const onBtnClick = async () => {
		const accounts = await web3.eth.getAccounts()
		await contract.methods
			.getPolicyInfo(policyId)
			.call({ from: accounts[0] })
			.then(setPolicy)
			.catch(console.error)
	}

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
				<TextField
					required
					fullWidth
					label='Policy Id'
					type='number'
					value={policyId}
					onChange={(e) => setPolicyId(e.target.value)}
				/>
				<Button
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={onBtnClick}>
					Get
				</Button>
				{policy && (
					<>
						<Typography variant='h6'>Patient Details</Typography>
						<Typography>Name: {policy._insuredAmount}</Typography>
						<Typography>Name: {policy._balanceAmount}</Typography>
					</>
				)}
			</Box>
		</Container>
	)
}

export default GetPolicyDetails
