import { MORALIS_IPFS_GATEWAY } from "$constants/config";

export const handleIpfsUrl = (url: string) => url.replace("ipfs://", MORALIS_IPFS_GATEWAY);
