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

const PatientTreatmentDetails = () => {
	const [treatmentUid, setTreatmentUid] = useState('')
	const [treatmentDetails, setTreatmentDetails] = useState(null)

	const onBtnClick = async () => {
		const accounts = await web3.eth.getAccounts()
		await contract.methods
			.getTreatmentInfo(treatmentUid)
			.call({ from: accounts[0] })
			.then(setTreatmentDetails)
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
					name='uid'
					label='Treatment UID'
					type='number'
					value={treatmentUid}
					onChange={(e) => setTreatmentUid(e.target.value)}
				/>
				<Button
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={onBtnClick}>
					Get
				</Button>
				{treatmentDetails && (
					<>
						<Typography variant='h6'>Treatment Details</Typography>
						<Typography>
							Aadhaar: {parseInt(treatmentDetails.patientAadhaar)}
						</Typography>
						<Typography>
							Hospital ID: {parseInt(treatmentDetails.hospitalId)}
						</Typography>
						<Typography>
							Doctor's Name: {treatmentDetails.doctorName}
						</Typography>
						<Typography>
							Diagnosis: {treatmentDetails.diagnosis}
						</Typography>
						<Typography>
							Tests conducted: {treatmentDetails.testsConducted}
						</Typography>
						<Typography>
							Billing Amount:{' '}
							{parseInt(treatmentDetails.billingAmount._hex)}
						</Typography>
						<Typography>
							Medicines: {treatmentDetails.medicines}
						</Typography>
					</>
				)}
			</Box>
		</Container>
	)
}

export default PatientTreatmentDetails
