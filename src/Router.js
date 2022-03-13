import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/common/Home'
import HospitalSignUp from './components/hospital/HospitalSignUp'
import InsuranceProviderSignUp from './components/insurance/InsuranceProviderSignUp'
import PatientDetails from './components/patient/PatientDetails'
import PatientSignUp from './components/patient/PatientSignUp'
import PatientTreatment from './components/patient/PatientTreatment'
import AddInsurancePolicy from './components/insurance/AddInsurancePolicy'

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
			<Route path='treat-patient' element={<PatientTreatment />} />
			<Route
				path='add-insurance-policy'
				element={<AddInsurancePolicy />}
			/>
		</Routes>
	)
}

export default Router
