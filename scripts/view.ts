import { providers } from "ethers";
import { ERC1155Token__factory as ERC1155TokenFactory } from "../typechain";
import { CONTRACT_ADDRESS, PROVIDER_URL, PUBLIC_KEY } from "./consts";

const view = async () => {
  const provider = new providers.JsonRpcProvider(PROVIDER_URL);
  const contract = ERC1155TokenFactory.connect(
    CONTRACT_ADDRESS,
    provider.getSigner()
  );

  const balance = await contract.balanceOf(PUBLIC_KEY, 1);

  console.log(balance.toString());
};

view();
