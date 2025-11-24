import { ethers } from "ethers";
import SubsidyVouchersABI from "./SubsidyVouchersABI.json";

const provider = new ethers.BrowserProvider(window.ethereum);
const signer = await provider.getSigner();
const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
const contract = new ethers.Contract(contractAddress, SubsidyVouchersABI, signer);

// Example: issue a voucher
await contract.issueVoucher("0xFarmerAddress", 100);

// Example: redeem a voucher
await contract.redeemVoucher(1);
