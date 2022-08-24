import { keccak256 } from "@ethersproject/keccak256";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

await provider.send("eth_requestAccounts", []);

const signer = provider.getSigner();

const address = "0x847FB490b9255758738c1DBddD9E3049E9bC86c8";

const abi = [
  "function claim(uint256 _amountInFinney) public payable",
  "function merkleProof(bytes32[] memory proof) public",
];

const contract = new ethers.Contract(address, abi, signer);

// problem 3
// await contract.claim(1);

// problem 4
let leafNodes = [
  "zkplayground",
  "zkpenguin",
  "zkpancake",
  "zkpolice",
  "zkpig",
  "zkpigeon",
  "zkpoison",
];

const hashNodes = leafNodes.map((ids) => ethers.utils.id(ids));

const tree = new window.MerkleTree(hashNodes, keccak256, {
  sortPairs: true,
});

const root = tree.getHexRoot();
console.log(root);

const proof = tree.getHexProof(ethers.utils.id("zkplayground"));
console.log(proof);

// await contract.merkleProof(proof);
