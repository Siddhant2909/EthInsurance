import web3 from './web3'

const address = '0xE5adC765E496a0aF285682396bf152BeECd102b9'
const abi = [
	{
		inputs: [],
		stateMutability: 'nonpayable',
		type: 'constructor'
	},
	{
		inputs: [
			{
				internalType: 'uint256',
				name: 'aadharno',
				type: 'uint256'
			},
			{
				internalType: 'string',
				name: '_email',
				type: 'string'
			},
			{
				internalType: 'string',
				name: '_name',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: '_phoneNo',
				type: 'uint256'
			},
			{
				internalType: 'string',
				name: '_bloodGroup',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: '_insuranceCompany',
				type: 'uint256'
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
				internalType: 'string',
				name: '_name',
				type: 'string'
			},
			{
				internalType: 'string',
				name: '_email',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: '_phoneNo',
				type: 'uint256'
			},
			{
				internalType: 'string',
				name: '_bloodGroup',
				type: 'string'
			},
			{
				internalType: 'uint256',
				name: '_insuranceCompany',
				type: 'uint256'
			}
		],
		stateMutability: 'view',
		type: 'function'
	}
]

export default new web3.eth.Contract(abi, address)
