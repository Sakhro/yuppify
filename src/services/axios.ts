import axios from "axios";
import { MORALIS_API_URL, MORALIS_API_KEY } from "$constants/config";

export const moralisAxios = axios.create({
  baseURL: MORALIS_API_URL,
  headers: {
    Accept: "application/json",
    "X-API-Key": MORALIS_API_KEY as string,
  },
});

export { axios };
