import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Close } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import contract from '../../contract'
import web3 from '../../web3'
import { Alert, Collapse, IconButton } from '@mui/material'

const AddInsurancePolicy = () => {
	const [policy, setPolicy] = React.useState({
		uid: '',
		insuranceProviderId: '',
		patientAadhaar: '',
		insuredAmount: ''
	})
	const [open, setOpen] = React.useState(false)

	const { uid, insuranceProviderId, patientAadhaar, insuredAmount } = policy

	const handleChange = (e) => {
		setPolicy((prevPatient) => ({
			...prevPatient,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const accounts = await web3.eth.getAccounts()
		await contract.methods
			.addInsurancePolicy([
				uid,
				insuranceProviderId,
				patientAadhaar,
				insuredAmount
			])
			.send({ from: accounts[0] }, (result) => {
				setOpen(true)
				setPolicy({
					uid: '',
					insuranceProviderId: '',
					patientAadhaar: '',
					insuredAmount: ''
				})
			})
	}

	return (
		<Container component='main' maxWidth='xs'>
			<Collapse in={open} sx={{ marginTop: '20px' }}>
				<Alert
					action={
						<IconButton
							aria-label='close'
							color='inherit'
							size='small'
							onClick={() => {
								setOpen(false)
							}}>
							<Close fontSize='inherit' />
						</IconButton>
					}
					sx={{ mb: 2 }}>
					Insurance Policy added
				</Alert>
			</Collapse>
			<CssBaseline />
			<Box
				sx={{
					marginTop: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}>
				<Typography component='h1' variant='h5'>
					Add Insurance Policy
				</Typography>
				<Box
					component='form'
					noValidate
					onSubmit={handleSubmit}
					sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='uid'
								label='Unique ID'
								type='number'
								value={uid}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='insuranceProviderId'
								label='Insurance Provider ID'
								type='number'
								value={insuranceProviderId}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='patientAadhaar'
								label='Patient Aadhaar'
								type='number'
								value={patientAadhaar}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='insuredAmount'
								label='Insured Amount'
								type='number'
								value={insuredAmount}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Add record
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default AddInsurancePolicy
