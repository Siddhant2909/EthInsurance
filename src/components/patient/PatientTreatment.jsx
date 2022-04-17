import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import { Close } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Alert, Collapse, IconButton } from '@mui/material'
import { useWeb3React } from '@web3-react/core'
import { ContractContext } from '../../ContractProvider'

const PatientTreatment = () => {
	const [treatment, setTreatment] = React.useState({
		uid: '',
		patientAadhaar: '',
		doctorName: '',
		hospitalId: '',
		diagnosis: '',
		testsConducted: '',
		billingAmount: '',
		medicines: ''
	})
	const [open, setOpen] = React.useState(false)
	const { account } = useWeb3React()
	const contract = React.useContext(ContractContext)

	const {
		uid,
		patientAadhaar,
		doctorName,
		hospitalId,
		diagnosis,
		testsConducted,
		billingAmount,
		medicines
	} = treatment

	const handleChange = (e) => {
		setTreatment((prevPatient) => ({
			...prevPatient,
			[e.target.name]: e.target.value
		}))
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		await contract.methods
			.treatPatient([
				uid,
				patientAadhaar,
				doctorName,
				hospitalId,
				diagnosis,
				testsConducted,
				billingAmount,
				medicines
			])
			.send({ from: account }, (result) => {
				setOpen(true)
				setTreatment({
					uid: '',
					patientAadhaar: '',
					doctorName: '',
					hospitalId: '',
					diagnosis: '',
					testsConducted: '',
					billingAmount: '',
					medicines: ''
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
					Treatment record added
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
					Add Treatment Record
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
								name='patientAadhaar'
								label='Patient Aadhaar'
								type='number'
								value={patientAadhaar}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								name='doctorName'
								required
								fullWidth
								label={`Doctor's Name`}
								value={doctorName}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								label='Hospital ID'
								name='hospitalId'
								type='number'
								value={hospitalId}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='diagnosis'
								label='Diagnosis'
								value={diagnosis}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='testsConducted'
								label='Tests Conducted'
								value={testsConducted}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='billingAmount'
								label='Billing Amount'
								type='number'
								value={billingAmount}
								onChange={handleChange}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								required
								fullWidth
								name='medicines'
								label='Medicines'
								value={medicines}
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

export default PatientTreatment
