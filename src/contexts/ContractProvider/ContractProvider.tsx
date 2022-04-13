import React from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import pathOr from "ramda/src/pathOr";

import { axios } from "$services/axios";
import { createContext } from "$helpers/createContext";
import { CONTRACT_ADDRESS } from "$constants/config";

interface IContractContext {
  minted: number;
  mintedTokenId?: number;
  queryMinted: () => Promise<void>;
  setMintedTokenId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const [ContractContext, useContractContext] = createContext<IContractContext>();

export const ContractProvider: React.FC = (props) => {
  const [mintedTokenId, setMintedTokenId] = React.useState<number>();
  const [minted, setMinted] = React.useState(0);

  const queryMinted = React.useCallback(
    compose(andThen(compose(setMinted, pathOr(0, ["data", "total"]))), () => axios(`/api/nft/${CONTRACT_ADDRESS}`)),
    []
  );

  React.useEffect(() => {
    queryMinted();
  }, []);

  const value = React.useMemo(
    () => ({
      minted,
      queryMinted,
      mintedTokenId,
      setMintedTokenId,
    }),
    [mintedTokenId, minted]
  );

  return <ContractContext.Provider value={value} {...props} />;
};

export { useContractContext };
