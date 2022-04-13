import { NextApiRequest, NextApiResponse } from "next";

import { moralisAxios } from "$services/axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await moralisAxios(`/nft/${req.query.address}?chain=bsc&format=decimal`);

    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
