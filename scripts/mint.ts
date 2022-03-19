import { providers } from "ethers";
import { ERC1155Token__factory as ERC1155TokenFactory } from "../typechain";

const CONTRACT_ADDRESS = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
const PUBLIC_KEY = "0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266";
const PROVIDER_URL = "http://localhost:8545";
const TOKEN_ID = 1;

const mint = async () => {
  const provider = new providers.JsonRpcProvider(PROVIDER_URL);
  const contract = ERC1155TokenFactory.connect(
    CONTRACT_ADDRESS,
    provider.getSigner()
  );

  const tx = await contract.mint(PUBLIC_KEY, TOKEN_ID, 10, []);

  console.log(tx);
};

mint();
