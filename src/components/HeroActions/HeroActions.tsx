import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Link } from "$components/Link";
import { Trans } from "$components/Trans";
import { MintButton } from "$components/MintButton";
import { useTranslation } from "$hooks/useTranslation";
import { CBA_LINK, MAX_COSSACKS_SUPPLY, SMART_CONTRACT_LINK, TWITTER_URL } from "$constants/config";
import { useWeb3Context } from "$contexts/Web3Provider";
import { ConnectWalletButton } from "$components/ConnectWalletButton";
import { useContractContext } from "$contexts/ContractProvider";
import { QrCode } from "$components/QrCode";

export const HeroActions = () => {
  const { minted } = useContractContext();
  const { provider } = useWeb3Context();
  const { t } = useTranslation(["home", "common"]);

  const IS_ALL_MINTED = minted >= MAX_COSSACKS_SUPPLY;

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography gutterBottom variant="h4" fontWeight={700}>
          {t("home:title")}
        </Typography>
        <Typography gutterBottom>{t("home:description1")}</Typography>
        <Typography gutterBottom>
          <Trans
            t={t}
            i18nKey="home:description2"
            components={{
              cbaLink: <Link href={CBA_LINK} target="_blank" />,
              smartContractLink: <Link href={SMART_CONTRACT_LINK} target="_blank" />,
            }}
          />
        </Typography>
        <Typography gutterBottom>
          {t("common:minted")}: {minted} | {MAX_COSSACKS_SUPPLY}
        </Typography>
      </Grid>
      {!IS_ALL_MINTED && (
        <>
          <Grid item>
            {provider && <MintButton />}
            {!provider && <ConnectWalletButton fullWidth>{t("home:connectToMint")}</ConnectWalletButton>}
          </Grid>
          <Grid item>
            <QrCode />
          </Grid>
        </>
      )}
      {IS_ALL_MINTED && (
        <Grid item>
          <Typography gutterBottom>
            <Trans
              t={t}
              i18nKey="home:allMinted"
              components={{
                twitterLink: <Link href={TWITTER_URL} target="_blank" />,
              }}
            />
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};
