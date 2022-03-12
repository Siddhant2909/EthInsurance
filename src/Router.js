import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import HospitalSignUp from './components/HospitalSignUp'
import InsuranceProviderSignUp from './components/InsuranceProviderSignUp'
import PatientDetails from './components/PatientDetails'
import PatientSignUp from './components/PatientSignUp'

const Router = () => {
	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='add-patient' element={<PatientSignUp />} />
			<Route path='patient-details' element={<PatientDetails />} />
			<Route path='add-hospital' element={<HospitalSignUp />} />
			<Route
				path='add-insurance-provider'
				element={<InsuranceProviderSignUp />}
			/>
		</Routes>
	)
}

export default Router
