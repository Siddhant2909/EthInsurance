import web3 from './web3'

const address = '0xC7003A96B9532B71C36fDbf38eB9C61D4581973e'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'uid',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'helplineEmail',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'helplineNumber',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'emergencyNumber',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'location',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'speciality',
						type: 'string'
					}
				],
				internalType: 'struct Patient.hospital_info',
				name: 'hospital_infor',
				type: 'tuple'
			}
		],
		name: 'addHospital',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'uid',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'insuranceProviderId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'patientaadhar',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'insuredamount',
						type: 'uint256'
					}
				],
				internalType: 'struct Patient.ins_policy_info',
				name: 'ins_policy_infor',
				type: 'tuple'
			}
		],
		name: 'addInsurancePolicy',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'uid',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'helplineEmail',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'helplineNumber',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'emergencyNumber',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'location',
						type: 'string'
					}
				],
				internalType: 'struct Patient.ins_comp_info',
				name: 'ins_comp_infor',
				type: 'tuple'
			}
		],
		name: 'addInsuranceProvider',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'aadharno',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'email',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'age',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'phoneNo',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'bloodGroup',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'insuranceCompanyId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'height',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'residentialAddress',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'ailments',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'emergencyContactName',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'emergencyContactRelation',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'emergencyContactPhone',
						type: 'uint256'
					}
				],
				internalType: 'struct Patient.inputPatient',
				name: 'inputPatientInfo',
				type: 'tuple'
			}
		],
		name: 'addPatientInfo',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'uid',
				type: 'uint256'
			}
		],
		name: 'getHospitaltInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'helplineEmail',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'helplineNumber',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'emergencyNumber',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'location',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'speciality',
						type: 'string'
					}
				],
				internalType: 'struct Patient.hospital',
				name: 'HospitalData',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'aadharno',
				type: 'uint256'
			}
		],
		name: 'getPatientInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'email',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'age',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'phoneNo',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'bloodGroup',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'insuranceCompanyId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'height',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'weight',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'residentialAddress',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'ailments',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'emergencyContactName',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'emergencyContactRelation',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'emergencyContactPhone',
						type: 'uint256'
					}
				],
				internalType: 'struct Patient.patient',
				name: 'patientInfoValue',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'uid',
				type: 'uint256'
			}
		],
		name: 'getPolicyInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'insuranceProviderId',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'patientaadhar',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'insuredamount',
						type: 'uint256'
					}
				],
				internalType: 'struct Patient.ins_policy',
				name: 'InsPolicyValue',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'uid',
				type: 'uint256'
			}
		],
		name: 'getProviderInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'string',
						name: 'name',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'helplineEmail',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'helplineNumber',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'emergencyNumber',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'location',
						type: 'string'
					}
				],
				internalType: 'struct Patient.ins_comp',
				name: 'InsCompValue',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'uid',
				type: 'uint256'
			}
		],
		name: 'getTreatmentInfo',
		outputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'patientAadhaar',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'doctorName',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'hospitalId',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'diagnosis',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'testsConducted',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'billingAmount',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'medicines',
						type: 'string'
					}
				],
				internalType: 'struct Patient.treatment',
				name: 'TreatmentData',
				type: 'tuple'
			}
		],
		stateMutability: 'view',
		type: 'function'
	},
	{
		inputs: [
			{
				components: [
					{
						internalType: 'uint256',
						name: 'uid',
						type: 'uint256'
					},
					{
						internalType: 'uint256',
						name: 'patientAadhaar',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'doctorName',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'hospitalId',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'diagnosis',
						type: 'string'
					},
					{
						internalType: 'string',
						name: 'testsConducted',
						type: 'string'
					},
					{
						internalType: 'uint256',
						name: 'billingAmount',
						type: 'uint256'
					},
					{
						internalType: 'string',
						name: 'medicines',
						type: 'string'
					}
				],
				internalType: 'struct Patient.treatment_info',
				name: 'treatment_infor',
				type: 'tuple'
			}
		],
		name: 'treatPatient',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function'
	}
]

export default new web3.eth.Contract(abi, address)
