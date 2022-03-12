import {
	Box,
	Button,
	Container,
	CssBaseline,
	TextField,
	Typography
} from '@mui/material'
import React, { useState } from 'react'
import contract from '../contract'
import web3 from '../web3'

const PatientDetails = () => {
	const [aadhaarNumber, setAadhaarNumber] = useState('')
	const [patient, setPatient] = useState(null)

	const onBtnClick = async () => {
		const accounts = await web3.eth.getAccounts()
		await contract.methods
			.getPatientInfo(aadhaarNumber)
			.call({ from: accounts[0] })
			.then(setPatient)
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
					name='aadhaarNumber'
					label='Aadhaar Number'
					type='number'
					value={aadhaarNumber}
					onChange={(e) => setAadhaarNumber(e.target.value)}
				/>
				<Button
					fullWidth
					variant='contained'
					sx={{ mt: 3, mb: 2 }}
					onClick={onBtnClick}>
					Get
				</Button>
				{patient && (
					<>
						<Typography variant='h6'>Patient Details</Typography>
						<Typography>Name: {patient._name}</Typography>
						<Typography>Height: {patient._height}</Typography>
						<Typography>Weight: {patient._weight}</Typography>
						<Typography>Email: {patient._email}</Typography>
						<Typography>
							Mobile: {parseInt(patient._phoneNo._hex)}
						</Typography>
						<Typography>
							Address: {patient._residentialAddress}
						</Typography>
						<Typography>
							Insurance ID:{' '}
							{parseInt(patient._insuranceCompany._hex)}
						</Typography>
						<Typography>
							Blood Group: {patient._bloodGroup}
						</Typography>
						<Typography>
							Permanent Ailments: {patient._ailments}
						</Typography>
						<Typography>
							Emergency Contact Name:{' '}
							{patient._emergencyContactName}
						</Typography>
						<Typography>
							Emergency Contact Relation:{' '}
							{patient._emergencyContactRelation}
						</Typography>
						<Typography>
							Emergency Contact Phone:{' '}
							{patient._emergencyContactPhone}
						</Typography>
					</>
				)}
			</Box>
		</Container>
	)
}

export default PatientDetails
