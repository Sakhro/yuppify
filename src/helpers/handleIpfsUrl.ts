import { INFURA_IPFS_GATEWAY } from "$constants/config";

export const handleIpfsUrl = (url: string) => url.replace("ipfs://", INFURA_IPFS_GATEWAY);
