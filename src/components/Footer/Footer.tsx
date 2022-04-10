import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TwitterIcon from "@mui/icons-material/Twitter";

import GitHubIcon from "@mui/icons-material/GitHub";

import { Link } from "$components/Link";
import { PROJECT_WALLET_ADDRESS, REPO_URL, TWITTER_URL } from "$constants/config";
import { useTranslation } from "$hooks/useTranslation";

export const Footer = () => {
  const { t } = useTranslation("seo");

  return (
    <footer>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <Link href={REPO_URL} target="_blank">
            <GitHubIcon htmlColor="white" />
          </Link>
          <Link href={TWITTER_URL} ml={2} target="_blank">
            <TwitterIcon htmlColor="white" />
          </Link>
        </Grid>
        <Grid item>
          <Typography variant="caption" align="center" width="100%" component="small">
            Support us: BNB {PROJECT_WALLET_ADDRESS}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" align="center" width="100%" component="small">
            © {new Date().getFullYear()} | {t("title")}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};
