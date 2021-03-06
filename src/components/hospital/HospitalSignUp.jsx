import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Close } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { ContractContext } from '../../ContractProvider'
import { Alert, Collapse, IconButton } from '@mui/material'
import { useWeb3React } from '@web3-react/core'

const HospitalSignUp = () => {
	const [hospital, setHospital] = React.useState({
		uid: '',
		name: '',
		helplineEmail: '',
		helplineNumber: '',
		emergencyNumber: '',
		location: '',
		speciality: ''
	})
	const { account } = useWeb3React()
	const contract = React.useContext(ContractContext)
	const [alert, setAlert] = React.useState({
		severity: '',
		open: false,
		message: ''
	})

	const {
		uid,
		name,
		helplineEmail,
		helplineNumber,
		emergencyNumber,
		location,
		speciality
	} = hospital

	const handleChange = (e) => {
		setHospital((prevPatient) => ({
			...prevPatient,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		await contract.methods
			.addHospital([
				uid,
				name,
				helplineEmail,
				helplineNumber,
				emergencyNumber,
				location,
				speciality
			])
			.send({ from: account }, (error) => {
				console.log('error from blockchain', error)
				if (error) {
					return setAlert({
						...alert,
						open: true,
						severity: 'error',
						message: 'Duplicate record cannot be added'
					})
				}
				setAlert({
					...alert,
					open: true,
					severity: 'success',
					message: 'Hospital added'
				})
				setHospital({
					uid: '',
					name: '',
					helplineEmail: '',
					helplineNumber: '',
					emergencyNumber: '',
					location: '',
					speciality: ''
				})
			})
	}

	return (
		<Container component='main' maxWidth='xs'>
			<Collapse in={alert.open} sx={{ marginTop: '20px' }}>
				<Alert
					action={
						<IconButton
							aria-label='close'
							color='inherit'
							size='small'
							onClick={() => {
								setAlert({ ...alert, open: false })
							}}>
							<Close fontSize='inherit' />
						</IconButton>
					}
					severity={alert.severity}
					sx={{ mb: 2 }}>
					{alert.message}
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
					Add Hospital Details
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
								name='name'
								required
								fullWidth
								label='Hospital Name'
								value={name}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label='Helpline Email'
								name='helplineEmail'
								autoComplete='email'
								value={helplineEmail}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='helplineNumber'
								label='Helpline Number'
								type='number'
								value={helplineNumber}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='emergencyNumber'
								label='Emergency Number'
								type='number'
								value={emergencyNumber}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='location'
								label='Location'
								value={location}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='speciality'
								label='Speciality'
								value={speciality}
								onChange={handleChange}
							/>
						</Grid>
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						sx={{ mt: 3, mb: 2 }}>
						Add details
					</Button>
				</Box>
			</Box>
		</Container>
	)
}

export default HospitalSignUp
