import { providers } from "ethers";
import { ERC1155Token__factory as ERC1155TokenFactory } from "../typechain";
import { CONTRACT_ADDRESS, PROVIDER_URL, PUBLIC_KEY } from "./consts";

const transfer = async () => {
  const provider = new providers.JsonRpcProvider(PROVIDER_URL);
  const contract = ERC1155TokenFactory.connect(
    CONTRACT_ADDRESS,
    provider.getSigner()
  );

  const recepient = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";

  const tx = await contract.safeTransferFrom(PUBLIC_KEY, recepient, 1, 1, []);

  console.log(tx);
};

transfer();
