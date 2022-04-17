import { useWeb3React } from '@web3-react/core'
import React, { createContext, useEffect, useState } from 'react'
import contract from './contract.json'
const { address, abi } = contract
const ContractContext = createContext()

const ContractProvider = ({ children }) => {
	const [contract, setContract] = useState(null)
	const { library, active } = useWeb3React()

	useEffect(() => {
		if (active && library)
			setContract(new library.eth.Contract(abi, address))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [active])

	return (
		<ContractContext.Provider value={contract}>
			{children}
		</ContractContext.Provider>
	)
}
export { ContractContext }
export default ContractProvider
