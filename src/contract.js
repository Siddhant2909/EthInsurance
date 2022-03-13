import web3 from './web3'

const address = '0x7FeF9A2d78564db922F073175ec25599BB070B39'
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
	}
]

export default new web3.eth.Contract(abi, address)
