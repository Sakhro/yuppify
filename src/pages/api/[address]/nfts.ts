/**
 * This functionality is inspired by https://github.com/fukuball/rarity-analyser
 */
import fs from "fs";
import path from "path";
import inc from "ramda/src/inc";
import over from "ramda/src/over";
import Database from "better-sqlite3";
import lensProp from "ramda/src/lensProp";
import { NextApiRequest, NextApiResponse } from "next";

import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";

const CONTRACT_DB_MAP: Record<string, string> = {
  [COSSACKS_CONTRACT_ADDRESS]: fs.readFileSync(
    path.join(__dirname, "..", "..", "..", "..", "..", "_files", "cossacks.sqlite")
  ) as any,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const DB = new Database(CONTRACT_DB_MAP[req.query.address as string], { fileMustExist: true });
    const offset = req.query.offset || 0;
    const limit = req.query.offset || 450;
    const scoreTable = "punk_scores";
    const orderByStmt = `ORDER BY ${scoreTable}.rarity_rank ASC`;
    const punksQuery = `SELECT punks.*, ${scoreTable}.rarity_rank FROM punks INNER JOIN ${scoreTable} ON (punks.id = ${scoreTable}.punk_id) ${orderByStmt}  LIMIT :offset,:limit`;

    const nfts = DB.prepare(punksQuery).all({
      limit,
      offset,
    });

    res.status(200).json(nfts.map(over(lensProp("id"), inc)));
  } catch (error) {
    console.log(error);
    res.status(404).json(error);
  }
}
