import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link } from "$components/Link";
import { Trans } from "$components/Trans";
import { MintButton } from "$components/MintButton";
import { useTranslation } from "$hooks/useTranslation";
import { CBA_LINK, MAX_COSSACKS_SUPPLY, SMART_CONTRACT_LINK, TWITTER_URL } from "$constants/config";
import { useWeb3Context } from "$contexts/Web3Provider";
import { ConnectWalletButton } from "$components/ConnectWalletButton";
import { useContractContext } from "$contexts/ContractProvider";
import { QrCode } from "$components/QrCode";
import { Image } from "$components/Image";
import { CollectionAvatar } from "$components/CollectionAvatar";
import Box from "@mui/material/Box";
import { useMediaQuery } from "$hooks/useMediaQuery";

export const CollectionHeader = () => {
  const { minted } = useContractContext();
  const { provider } = useWeb3Context();
  const { isUpMd } = useMediaQuery();
  const { t } = useTranslation(["home", "common"]);

  const IS_ALL_MINTED = minted >= MAX_COSSACKS_SUPPLY;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} position="relative">
        <Box position="relative" height={isUpMd ? 350 : 150} borderRadius={2} overflow="hidden">
          <Image src="/static/images/cover.svg" layout="fill" objectFit="cover" />
        </Box>
        <Box
          position="absolute"
          height={150}
          width={150}
          bottom={-75}
          left="50%"
          ml="-75px"
          border="2px solid white"
          borderRadius={150}
          overflow="hidden"
        >
          <CollectionAvatar />
        </Box>
      </Grid>
      <Grid item xs={12} mt={10}>
        <Typography gutterBottom align="center" variant="h4" fontWeight={700}>
          Cossacks
        </Typography>
        <Typography gutterBottom align="center">
          {t("home:description1")}
        </Typography>
        <Typography gutterBottom align="center">
          <Trans
            t={t}
            i18nKey="home:description2"
            components={{
              cbaLink: <Link href={CBA_LINK} target="_blank" />,
              smartContractLink: <Link href={SMART_CONTRACT_LINK} target="_blank" />,
            }}
          />
        </Typography>
        <Typography gutterBottom align="center">
          {t("common:minted")}: {minted} | {MAX_COSSACKS_SUPPLY}
        </Typography>
      </Grid>
      <Grid item container spacing={2} alignItems="center" direction="column">
        {!IS_ALL_MINTED && (
          <>
            <Grid item maxWidth={350}>
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
            <Typography align="center" gutterBottom>
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
    </Grid>
  );
};
