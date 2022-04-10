import { useState } from "react";
import propEq from "ramda/src/propEq";
import compose from "ramda/src/compose";
import find from "ramda/src/find";
import path from "ramda/src/path";
import pathOr from "ramda/src/pathOr";

import { useContract } from "$hooks/useContract";
import { useSnackbar } from "$hooks/useSnackbar";
import { useContractContext } from "$contexts/ContractProvider";
import { useUserContext } from "$contexts/UserProvider";

const getTokenId = compose(path(["args", "tokenId"]), find(propEq("event", "Transfer")));

export const useMintHandler = () => {
  const { address } = useUserContext();
  const { setMintedTokenId } = useContractContext();
  const { showErrorSnackbar, showSuccessSnackbar } = useSnackbar();
  const [isLoading, setIsLoading] = useState(false);
  const contract = useContract();

  const handleMint = async () => {
    if (!contract || !address) return;

    setIsLoading(true);

    try {
      const price = await contract.price();
      const tx = await contract.mint(address, { value: price });
      const res = await tx.wait();

      showSuccessSnackbar("mintedSuccessfully");
      setMintedTokenId(Number(getTokenId(res.events)));
    } catch (error) {
      showErrorSnackbar(pathOr("error", ["data", "message"], error));
    }

    setIsLoading(false);
  };

  return {
    isLoading,
    handleMint,
  };
};
