import { useMemo } from "react";
import { ethers } from "ethers";

import ContractABI from "$static/ContractABI.json";
import { CONTRACT_ADDRESS } from "$constants/config";
import { useWeb3Context } from "$contexts/Web3Provider";

export const useContract = () => {
  const { provider } = useWeb3Context();

  const contract = useMemo(() => {
    if (!provider) return;

    const signer = provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ContractABI, signer);

    return contract;
  }, [provider]);

  return contract;
};
