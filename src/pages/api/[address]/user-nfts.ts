import applySpec from "ramda/src/applySpec";
import prop from "ramda/src/prop";
import compose from "ramda/src/compose";
import { NextApiRequest, NextApiResponse } from "next";

import { moralisAxios } from "$services/axios";

const mapResponse = applySpec({
  id: compose(Number, prop("token_id")),
  address: prop("token_address"),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { data } = await moralisAxios(
      `${req.query.address}/nft?chain=bsc&format=decimal&token_addresses=${req.query.tokenAddress}`
    );

    res.status(200).json(data.result.map(mapResponse));
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
