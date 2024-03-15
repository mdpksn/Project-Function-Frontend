import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import contractABI from "../artifacts/contracts/Assessment.sol/Assessment.json";

export default function HomePage() {
  const [ethWallet, setEthWallet] = useState(undefined);
  const [account, setAccount] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [storedNumber, setStoredNumber] = useState(undefined);
  const [newValue, setNewValue] = useState("");

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Updated contract address

  useEffect(() => {
    async function init() {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        setEthWallet(provider);
        const accounts = await provider.listAccounts();
        setAccount(accounts[0]);
        const contract = new ethers.Contract(contractAddress, contractABI.abi, signer);
        setContract(contract);
        getStoredNumber(); // Fetch initial stored number
      } else {
        console.error("MetaMask not found");
      }
    }
    init();
  }, []);

  // Function to get the stored number from the contract
  const getStoredNumber = async () => {
    try {
      const number = await contract.getNumber();
      setStoredNumber(number.toString());
    } catch (error) {
      console.error("Error getting stored number:", error);
    }
  };

  // Function to send a value to the contract and save it
  const setValue = async () => {
    try {
      const value = parseInt(newValue); // Parse newValue to an integer
      await contract.setNumber(value);
      console.log("Value sent to contract successfully.");
      // Don't fetch updated stored number here; let the user click the "Get Value" button
    } catch (error) {
      console.error("Error setting value:", error);
    }
  };

  // Function to retrieve the stored number from the contract
  const getValue = async () => {
    try {
      await getStoredNumber(); // Fetch stored number
    } catch (error) {
      console.error("Error getting value:", error);
    }
  };

  // Function to update the new value
  const handleNewValueChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome to the DApp!</h1>
      </header>
      <main>
        <p>Your Account: {account}</p>
        <p>Stored Number: {storedNumber}</p>
        <label htmlFor="newValue">New Value:</label>
        <input
          type="number"
          id="newValue"
          value={newValue}
          onChange={handleNewValueChange}
        />
        <button onClick={setValue}>Set Value</button>
        <button onClick={getValue}>Get Value</button>
      </main>
      <style jsx>{`
        .container {
          text-align: center;
        }
      `}</style>
    </div>
  );
}
