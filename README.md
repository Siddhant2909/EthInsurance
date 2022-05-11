
# EthInsurance 

Health Insurance is something the entire world relies on when it comes to medical treatment. But it is prone to several frauds between the process and removing them is really a challenge when it comes to India. The use of Blockchain technology increases the involvement of the user directly thus making it a clear process in every domain. Blockchain is used in this work to create a claim model that keeps insurance company transactions transparent. Patients, hospitals, and insurance companies will all be in direct touch with one other in an effort to eliminate fraud. In addition, it allows patients, clinicians, and other third parties to safely and efficiently access medical data.


## Tech Stack

**Frontend:** React, MaterialUI, @web3-react

**Blockchain:** Ganache

**Languages:** Javascript, Solidity

**Tools:** VS-Code, Remix IDE, Metamask

## Installation

### Prerequisites
1. Node JS should be installed
2. Metamask extension should be installed and signed in
3. Solidity Code should be pasted in Remix IDE
4. Ganache Blockchain should be installed on the system
5. VS-Code IDE

### Connection of Ganache with Remix IDE
1. Open Ganache Blockchain on your system
2. Open remix ide on your browser at https://remix.ethereum.org/
3. Open the workspace where your solidity code is pasted
4. For Deployment of Solidity Code, Go to “Deploy and Run Transactions”
5. Change the Environment to Ganache Provider
6. A popup opens, change the “Ganache JSON-RPC Endpoint” to http://127.0.0.1:7545 from http://127.0.0.1:8545
7. Click okay and Deploy

### Connection of Ganache with Metamask
1. Login to Metamask account
2. Click on network and select custom RPC
3. Give any name of your choice and provide the Ganache RPC Http URL i.e http://127.0.0.1:7545
4. This will connect your Metamask to Ganache. Initially your balance will be 0 ether. You need to import your ganache account.
5. Open your accounts by clicking at top right corner of your Metamask and select Import Account.
6. You need to provide your private key of your account in Ganache. Open Ganache and click on Show Keys for any of your accounts which will show your account address and private key. Copy the private key and paste it in metamask.
### Run the dApp
1. Open VS-Code
2. Open the EthInsurance folder in your VS-Code
3. Open Remix IDE in browser
4. Deploy the solidity code 
5. copy the address on the deployed code and go to EthInsurance folder in VS-Code.
6. paste the address in contract.json file
7. From remix copy abi from file named as “contract.name_metadata.json”
8. paste in the same contract.json file
9. Press Ctrl+` to open VS-Code Console
10. Run npm i followed by npm start for the first time and the only npm start after that
11. The dApp opens up on http://localhost:3000
12. The first button you see in “Connect to Metamask”, click on it.
13. The Metamask popups choose the account you previously created and connected with Ganache and you notice the ETH is updated and shows balance as 100.
14. After the connection is complete you can use all functionalities. All insert functions require ETH and all get functions are free.

    
