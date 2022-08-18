import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();

const address = "0x847FB490b9255758738c1DBddD9E3049E9bC86c8";

const abi = ["function claim(uint256 _amountInFinney) public payable"];

const contract = new ethers.Contract(address, abi, signer);

const res = await contract.claim(1);

console.log(res);
