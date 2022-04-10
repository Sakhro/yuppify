export const SHARED_NAMESPACES = ["common", "seo", "snackbar"];

export const BSC_CHAIN_ID = 56;
export const T_BSC_CHAIN_ID = 97;

export const IS_DEV_ENV = process.env.NEXT_PUBLIC_ENV === "development";
export const IS_PROD_ENV = !IS_DEV_ENV;

export const DEFAULT_CHAIN_ID = IS_DEV_ENV ? T_BSC_CHAIN_ID : BSC_CHAIN_ID;

const PROD_RPC_URL = "https://bsc-dataseed.binance.org";
const DEV_RPC_URL = "https://data-seed-prebsc-1-s1.binance.org:8545";

const DEV_RPCs = {
  [T_BSC_CHAIN_ID]: DEV_RPC_URL,
};

const PROD_RPCs = {
  [BSC_CHAIN_ID]: PROD_RPC_URL,
};

export const RPCS = IS_DEV_ENV ? DEV_RPCs : PROD_RPCs;

export const REPO_URL = "https://github.com/Sakhro/yuppify";
export const TWITTER_URL = "https://twitter.com/yuppifyio";

export const CBA_LINK = "https://www.comebackalive.in.ua/donate";

const PROD_CURRENCY_SYMBOL = "BNB";
const DEV_CURRENCY_SYMBOL = "tBNB";

export const DEFAULT_CURRENCY_SYMBOL = IS_DEV_ENV ? DEV_CURRENCY_SYMBOL : PROD_CURRENCY_SYMBOL;
export const NFT_PRICE = 0.05;

export const CONTRACT_ADDRESS = "0x4dB15d4E3fD60EFb41EF9f593f959aF9172D36b9";

const DEV_SMART_CONTRACT_LINK = `https://testnet.bscscan.com/address/${CONTRACT_ADDRESS}`;
const PROD_SMART_CONTRACT_LINK = `https://bscscan.com/address/${CONTRACT_ADDRESS}`;

export const SMART_CONTRACT_LINK = IS_DEV_ENV ? DEV_SMART_CONTRACT_LINK : PROD_SMART_CONTRACT_LINK;

export const INFURA_IPFS_GATEWAY = "https://infura-ipfs.io/ipfs/";
export const MORALIS_IPFS_GATEWAY = "https://ipfs.moralis.io:2053/ipfs/";

export const PROJECT_WALLET_ADDRESS = "0x4C7166ae66d187d96EEc8d171B34bB9F066f33D2";
