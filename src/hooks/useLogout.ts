import { useUserContext } from "$contexts/UserProvider";
import { useWeb3Context } from "$contexts/Web3Provider";

export const globalLogout = () => {
  localStorage.clear();
  sessionStorage.clear();
};

export function useLogout() {
  const { provider, setProvider } = useWeb3Context();
  const { setAddress } = useUserContext();

  const logout = () => {
    globalLogout();

    // For WalletConnect
    if ((provider?.provider as any)?.disconnect) {
      (provider?.provider as any)?.disconnect();
    }

    setProvider(undefined);
    setAddress(undefined);
  };

  return logout;
}
