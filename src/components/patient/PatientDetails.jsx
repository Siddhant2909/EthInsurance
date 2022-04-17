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

const PatientDetails = () => {
	const [aadhaarNumber, setAadhaarNumber] = useState('')
	const [patient, setPatient] = useState(null)
	const { account } = useWeb3React()
	const contract = React.useContext(ContractContext)

	const onBtnClick = async () => {
		await contract.methods
			.getPatientInfo(aadhaarNumber)
			.call({ from: account })
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
						<Typography>Name: {patient.name}</Typography>
						<Typography>
							Age: {parseInt(patient.age._hex)}
						</Typography>
						<Typography>
							Height: {parseInt(patient.height._hex)}
						</Typography>
						<Typography>
							Weight: {parseInt(patient.weight._hex)}
						</Typography>
						<Typography>Email: {patient.email}</Typography>
						<Typography>
							Mobile: {parseInt(patient.phoneNo._hex)}
						</Typography>
						<Typography>
							Address: {patient.residentialAddress}
						</Typography>
						<Typography>
							Insurance ID:{' '}
							{parseInt(patient.insuranceCompanyId._hex)}
						</Typography>
						<Typography>
							Blood Group: {patient.bloodGroup}
						</Typography>
						<Typography>
							Permanent Ailments: {patient.ailments}
						</Typography>
						<Typography>
							Emergency Contact Name:{' '}
							{patient.emergencyContactName}
						</Typography>
						<Typography>
							Emergency Contact Relation:{' '}
							{patient.emergencyContactRelation}
						</Typography>
						<Typography>
							Emergency Contact Phone:{' '}
							{parseInt(patient.emergencyContactPhone._hex)}
						</Typography>
					</>
				)}
			</Box>
		</Container>
	)
}

export default PatientDetails
