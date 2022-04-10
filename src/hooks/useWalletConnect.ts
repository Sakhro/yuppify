import { providers } from "ethers";
import tap from "ramda/src/tap";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import WalletConnectProvider from "@walletconnect/web3-provider";

import { useWeb3Context } from "$contexts/Web3Provider";
import { RPCS } from "$constants/config";

const createConnection = (chainId: number) =>
  new WalletConnectProvider({
    rpc: RPCS,
    chainId,
  });

const enableConnection = async (connection: WalletConnectProvider) => {
  await connection.enable();
  return connection;
};

const getProvider = (connection: WalletConnectProvider) => new providers.Web3Provider(connection);

const getAddress = (provider: providers.Web3Provider) => provider.getSigner().getAddress();

export function useWalletConnect() {
  const { setProvider } = useWeb3Context();

  const handleConnection = compose(getAddress, tap<providers.Web3Provider>(setProvider), getProvider);

  const connectFn = compose(andThen(handleConnection), enableConnection, createConnection);

  return connectFn;
}
