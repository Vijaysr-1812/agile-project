import React,{ useState } from "react";
import { ethers } from "ethers";
import transfer from "./Pay.json";

const PaymentSection = () => {

    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [account, setAccount] = useState(null);
    const [paymentStatus,setPaymentStatus] = useState(false);

    const contractAddress = "0xcc3aB375d8238D444EF4e3F6D9235E2Ee72d28Ac";
    const ABI = transfer.abi;

    const connectWallet = async () => {
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            setProvider(provider);
            console.log("Working Fine");
            await window.ethereum.request({ method: "eth_requestAccounts" });
            const signer = await provider.getSigner();
            const accountAddress = await signer.getAddress();
            setAccount(accountAddress);
            console.log(accountAddress);
            const contractInstance = new ethers.Contract(contractAddress, ABI, signer);
            setContract(contractInstance);
            alert("Wallet Connected Successfully");
            
        } else {
          alert("Please install MetaMask!");
        }
      };
      const payFunction = async (functionName, value) => {
        if (!contract) {
          alert("Please connect your wallet first.");
          return;
        }
        try {
            const transaction = await contract[functionName]({ value: ethers.parseUnits(value.toString(), "wei") });
            await transaction.wait();
            setPaymentStatus(true);
            alert("Payment successful!");
          } catch (error) {
            console.error("Payment failed", error);
            alert("Payment failed: " + error.message);
          }
        };
        

  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
        <h1 className="text-5xl sm:text-4xl lg:text:7xl text-center tracking-center bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            Payment Gateway
        </h1>
        <p className="mt-5 text-lg text-center text-neutral-200 max-3xl">
        Seamlessly make secure payments using your wallet for specific time durations. Fast, reliable, and powered by blockchain technology!
        </p>
        <div className="flex justify-center my-10"> 
         <button 
         className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
          onClick={connectWallet}>Connect Wallet</button>
        </div>
        <div  className="flex justify-center my-10">
            {account && !paymentStatus && <p >Connected Account: {account}</p>}
        </div>
        { account && !paymentStatus &&
        <div className="flex justify-center my-10">
        <h2>Make a Payment</h2>
        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
         onClick={() => payFunction("firstHour", 10000)}>Pay for First Hour (Rs.50)</button>

        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
         onClick={() => payFunction("secondHour", 20000)}>Pay for Second Hour (Rs.100)</button>

        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md" 
         onClick={() => payFunction("thirdHour", 30000)}>Pay for Third Hour (Rs.200)</button>

        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md" 
         onClick={() => payFunction("sixthHour", 60000)}>Pay for Sixth Hour (Rs.500)</button>

        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md" 
         onClick={() => payFunction("Day", 120000)}>Pay for Day (Rs.1000)</button>
      </div>}
      { paymentStatus &&
        <div className="mt-5 text-lg text-center text-neutral-200 max-3xl my-5">
        <p>Payment Successful</p>
        </div>
      }
      { paymentStatus && <a href="/" 
      className=" mt-5 bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md"
       >Go To Home</a>
       
       }
      </div>
  )
}

export default PaymentSection