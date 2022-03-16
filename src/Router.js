import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/common/Home'
import HospitalSignUp from './components/hospital/HospitalSignUp'
import InsuranceProviderSignUp from './components/insurance/InsuranceProviderSignUp'
import PatientDetails from './components/patient/PatientDetails'
import PatientSignUp from './components/patient/PatientSignUp'
import PatientTreatment from './components/patient/PatientTreatment'
import AddInsurancePolicy from './components/insurance/AddInsurancePolicy'
import GetPolicyDetails from './components/insurance/GetPolicyDetails'
import PatientTreatmentDetails from './components/patient/PatientTreatmentDetails'

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
				path='get-treatment-details'
				element={<PatientTreatmentDetails />}
			/>
			<Route
				path='add-insurance-policy'
				element={<AddInsurancePolicy />}
			/>
			<Route path='get-policy' element={<GetPolicyDetails />} />
		</Routes>
	)
}

export default Router
