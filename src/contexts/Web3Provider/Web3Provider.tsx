import React from "react";
import path from "ramda/src/path";
import compose from "ramda/src/compose";
import { providers } from "ethers";

import { createContext } from "$helpers/createContext";
import { useUserContext } from "$contexts/UserProvider";

interface IWeb3Context {
  provider?: providers.Web3Provider;
  setProvider: React.Dispatch<React.SetStateAction<providers.Web3Provider | undefined>>;
}

const [Web3Context, useWeb3Context] = createContext<IWeb3Context>();

export const Web3Provider: React.FC = (props) => {
  const { setAddress } = useUserContext();
  const [provider, setProvider] = React.useState<providers.Web3Provider>();

  const value = React.useMemo(
    () => ({
      provider,
      setProvider,
    }),
    [provider]
  );

  React.useEffect(() => {
    if (!provider?.provider) {
      return;
    }

    (provider.provider as any).on("accountsChanged", compose(setAddress, path([0])));

    (provider.provider as any).on("disconnect", () => {
      setAddress(undefined);
      setProvider(undefined);
      sessionStorage.clear();
      localStorage.clear();
    });
  }, [provider]);

  return <Web3Context.Provider value={value} {...props} />;
};

export { useWeb3Context };
