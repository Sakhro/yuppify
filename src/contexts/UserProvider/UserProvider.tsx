import React from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import pathOr from "ramda/src/pathOr";

import { createContext } from "$helpers/createContext";
import { axios } from "$services/axios";
import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";

interface IUserNft {
  id: number;
  address: string;
}

interface IUserContext {
  address?: string;
  nfts: IUserNft[];
  setAddress: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const [UserContext, useUserContext] = createContext<IUserContext>();

export const UserProvider: React.FC = (props) => {
  const [address, setAddress] = React.useState<string>();
  const [nfts, setNfts] = React.useState<IUserNft[]>([]);

  const queryNfts = React.useCallback(
    compose(andThen(compose(setNfts, pathOr([], ["data"]))), (address: string) =>
      axios(`/api/${address}/user-nfts?tokenAddress=${COSSACKS_CONTRACT_ADDRESS}`)
    ),
    []
  );

  React.useEffect(() => {
    if (address) {
      queryNfts(address);
    } else {
      setNfts([]);
    }
  }, [address]);

  const value = React.useMemo(
    () => ({
      address,
      setAddress,
      nfts,
    }),
    [address, JSON.stringify(nfts)]
  );

  return <UserContext.Provider value={value} {...props} />;
};

export { useUserContext };
