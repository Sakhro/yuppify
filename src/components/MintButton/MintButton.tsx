import React from "react";
import Typography from "@mui/material/Typography";
import LoadingButton from "@mui/lab/LoadingButton";

import { useTranslation } from "$hooks/useTranslation";
import { MintedNFTModal } from "$components/MintedNFTModal";
import { DEFAULT_CURRENCY_SYMBOL, NFT_PRICE } from "$constants/config";
import { useContractContext } from "$contexts/ContractProvider";

import { useMintHandler } from "./useMintHandler";

export const MintButton = () => {
  const { minted, total } = useContractContext();
  const { handleMint, isLoading } = useMintHandler();
  const { t } = useTranslation("common");

  return (
    <>
      <Typography gutterBottom>
        {t("minted")}: {minted} | {total}
      </Typography>
      <LoadingButton fullWidth variant="contained" onClick={handleMint} loading={isLoading}>
        {t("mint")} {NFT_PRICE} {DEFAULT_CURRENCY_SYMBOL}
      </LoadingButton>
      <MintedNFTModal />
    </>
  );
};
