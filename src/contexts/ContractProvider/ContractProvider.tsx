import React from "react";
import { Contract } from "ethers";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";

import { createContext } from "$helpers/createContext";
import { useContract } from "$hooks/useContract";

interface IContractContext {
  minted: number;
  total: number;
  mintedTokenId?: number;
  queryTotal: (contract: Contract) => Promise<void>;
  queryMinted: (contract: Contract) => Promise<void>;
  setMintedTokenId: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const [ContractContext, useContractContext] = createContext<IContractContext>();

export const ContractProvider: React.FC = (props) => {
  const contract = useContract();
  const [mintedTokenId, setMintedTokenId] = React.useState<number>();
  const [minted, setMinted] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const queryTotal = React.useCallback((contract: Contract) => {
    return compose(andThen(compose(setTotal, Number)))(contract.maxSupply());
  }, []);

  const queryMinted = React.useCallback((contract: Contract) => {
    return compose(andThen(compose(setMinted, Number)))(contract.totalSupply());
  }, []);

  React.useEffect(() => {
    if (!contract) return;

    queryTotal(contract);
    queryMinted(contract);
  }, [contract]);

  const value = React.useMemo(
    () => ({
      total,
      minted,
      queryTotal,
      queryMinted,
      mintedTokenId,
      setMintedTokenId,
    }),
    [mintedTokenId, minted, total]
  );

  return <ContractContext.Provider value={value} {...props} />;
};

export { useContractContext };
