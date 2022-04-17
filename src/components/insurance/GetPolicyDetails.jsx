import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography
} from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import React, { useState } from 'react'
import { ContractContext } from '../../ContractProvider'

const GetPolicyDetails = () => {
	const [policyId, setPolicyId] = useState('')
	const [policy, setPolicy] = useState(null)
	const { account } = useWeb3React()
	const contract = React.useContext(ContractContext)

	const onBtnClick = async () => {
		await contract.methods
			.getPolicyInfo(policyId)
			.call({ from: account })
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
						<Typography>
							Insured Amount:{' '}
							{parseInt(policy.insuredAmount._hex)}
						</Typography>
						{/* <Typography>
							Balance Amount:{' '}
							{parseInt(policy.balanceAmount._hex)}
						</Typography> */}
					</>
				)}
			</Box>
		</Container>
	)
}

export default GetPolicyDetails
