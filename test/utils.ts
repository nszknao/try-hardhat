import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";
import { ERC1155Token__factory as ERC1155TokenFactory } from "../typechain";

export const getSigners = async () => {
  const [deployer, account0, account1, account2] = await ethers.getSigners();
  return { deployer, account0, account1, account2 };
};

export const deployERC1155Token = async (deployer?: SignerWithAddress) => {
  const signer = deployer || (await getSigners()).deployer;
  const factory = new ERC1155TokenFactory(signer);
  return factory.deploy();
};

export const address = (n: number): string => {
  return `0x${n.toString(16).padStart(40, "0")}`;
};
