import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { Link } from "$components/Link";
import { Trans } from "$components/Trans";
import { MintButton } from "$components/MintButton";
import { useTranslation } from "$hooks/useTranslation";
import { CBA_LINK, SMART_CONTRACT_LINK } from "$constants/config";
import { useWeb3Context } from "$contexts/Web3Provider";
import { ConnectWalletButton } from "$components/ConnectWalletButton";

export const HeroActions = () => {
  const { provider } = useWeb3Context();
  const { t } = useTranslation("home");

  return (
    <Grid container spacing={2} direction="column">
      <Grid item>
        <Typography gutterBottom variant="h4" fontWeight={700}>
          {t("title")}
        </Typography>
        <Typography gutterBottom>{t("description1")}</Typography>
        <Typography gutterBottom>
          <Trans
            t={t}
            i18nKey="description2"
            components={{
              cbaLink: <Link href={CBA_LINK} target="_blank" />,
              smartContractLink: <Link href={SMART_CONTRACT_LINK} target="_blank" />,
            }}
          />
        </Typography>
      </Grid>
      <Grid item>
        {provider && <MintButton />}
        {!provider && <ConnectWalletButton fullWidth>{t("connectToMint")}</ConnectWalletButton>}
      </Grid>
    </Grid>
  );
};
