## DApp README

### Overview
This DApp (Decentralized Application) serves as a simple interface for interacting with an Ethereum smart contract deployed on the blockchain. The DApp allows users to set and retrieve a stored number from the smart contract.

### Installation
To run the DApp locally, follow these steps:
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install dependencies by running `npm install`.

### Usage
1. Ensure you have MetaMask installed and configured in your browser.
2. Run the DApp locally by executing `npm start` in the terminal.
3. Visit the provided localhost URL in your browser to access the DApp.

### Features
- **Set Value**: Allows users to set a new value in the smart contract by entering a number and clicking the "Set Value" button.
- **Get Value**: Retrieves the currently stored number from the smart contract and displays it on the interface.
- **Account Information**: Displays the current Ethereum account address used for interaction.
- **Error Handling**: Error messages are displayed in the console for any encountered errors during contract interaction.

### Code Structure
- **JavaScript (React)**:
  - The main application logic and front-end codes are implemented in `index.js`.
  - React hooks such as `useState` and `useEffect` are used to manage component state and side effects.
  - Ethereum interactions are facilitated using the `ethers` library.
- **Smart Contract (Solidity)**:
  - The smart contract `Assessment.sol` contains simple functions for setting, getting, and incrementing a stored number.

### Smart Contract Details
- **Contract Address**: `0x5FbDB2315678afecb367f032d93F642f64180aa3`
- **Contract Functions**:
  - `setNumber(uint256 _number)`: Sets a new value in the contract storage.
  - `getNumber() returns (uint256)`: Retrieves the currently stored number.
  - `incrementNumber()`: Increments the stored number by one.

### Dependencies
- React
- ethers

### Author
- Kim Francis Ong ([@mdpksn](https://twitter.com/mdpksn))

### License
- This project is licensed under [SPDX MIT](https://spdx.org/licenses/MIT.html).
