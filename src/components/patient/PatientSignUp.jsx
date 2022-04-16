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

const PatientSignUp = () => {
	const [patient, setPatient] = React.useState({
		aadhaarNumber: '',
		name: '',
		age: '',
		email: '',
		bloodGroup: '',
		phoneNo: '',
		insuranceId: '',
		weight: '',
		height: '',
		residentialAddress: '',
		ailments: '',
		emergencyContactName: '',
		emergencyContactRelation: '',
		emergencyContactPhone: ''
	})
	const [open, setOpen] = React.useState(false)

	const {
		aadhaarNumber,
		name,
		age,
		email,
		bloodGroup,
		weight,
		height,
		phoneNo,
		insuranceId,
		residentialAddress,
		ailments,
		emergencyContactName,
		emergencyContactRelation,
		emergencyContactPhone
	} = patient

	const handleChange = (e) => {
		setPatient((prevPatient) => ({
			...prevPatient,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const accounts = await web3.eth.getAccounts()
		await contract.methods
			.addPatientInfo([
				aadhaarNumber,
				email,
				name,
				age,
				phoneNo,
				bloodGroup,
				insuranceId,
				height,
				weight,
				residentialAddress,
				ailments,
				emergencyContactName,
				emergencyContactRelation,
				emergencyContactPhone
			])
			.send({ from: accounts[0] }, (error) => {
				console.log('error from blockchain', error)
				setOpen(true)
				setPatient({
					aadhaarNumber: '',
					name: '',
					age: '',
					email: '',
					bloodGroup: '',
					phoneNo: '',
					insuranceId: '',
					weight: '',
					height: '',
					residentialAddress: '',
					ailments: '',
					emergencyContactName: '',
					emergencyContactRelation: '',
					emergencyContactPhone: ''
				})
			})
	}

	const fillDummyData = () => {
		setPatient({
			aadhaarNumber: 111,
			email: 'test',
			name: 'test',
			age: 11,
			phoneNo: 11111,
			bloodGroup: 'test',
			insuranceId: 11111,
			height: 2342,
			weight: 2342,
			residentialAddress: 'test',
			ailments: 'test',
			emergencyContactName: 'test',
			emergencyContactRelation: 'test',
			emergencyContactPhone: 12423
		})
	}

	return (
		<Container component='main' maxWidth='xs'>
			<Button onClick={() => fillDummyData()}>Fill</Button>
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
					Patient added
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
					Add Patient Details
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
								name='aadhaarNumber'
								label='Aadhaar Number'
								type='number'
								value={aadhaarNumber}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								autoComplete='given-name'
								name='name'
								required
								fullWidth
								label='Name'
								value={name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='age'
								label='Age'
								type='number'
								value={age}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label='Email'
								name='email'
								autoComplete='email'
								value={email}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='bloodGroup'
								label='Blood Group'
								value={bloodGroup}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='height'
								label='Height (in cm)'
								type='number'
								value={height}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='weight'
								label='Weight (in kg)'
								type='number'
								value={weight}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='phoneNo'
								label='Phone Number'
								type='number'
								value={phoneNo}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='insuranceId'
								label='Insurance ID'
								value={insuranceId}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='ailments'
								label='Permanent ailments'
								value={ailments}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='residentialAddress'
								label='Residential Address'
								value={residentialAddress}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='emergencyContactName'
								label='Emergency Contact Name'
								value={emergencyContactName}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='emergencyContactRelation'
								label='Emergency Contact Relation (They are my ...)'
								value={emergencyContactRelation}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='emergencyContactPhone'
								label='Emergency Contact Phone'
								type='number'
								value={emergencyContactPhone}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Sign Up
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default PatientSignUp
