import AppBar from "@mui/material/AppBar";
import type { Theme, SxProps } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { isFirefox } from "react-device-detect";

import { CONTENT_MAX_WIDTH } from "$constants/styles";
import { ElevationScroll } from "$components/ElevationScroll";
import { ConnectWalletButton } from "$components/ConnectWalletButton";
import { useTranslation } from "$hooks/useTranslation";
import { useUserContext } from "$contexts/UserProvider";
import { useMediaQuery } from "$hooks/useMediaQuery";
import { UserAddress } from "$components/UserAddress";

const toolbarSX: SxProps<Theme> = {
  justifyContent: "space-between",
  width: "100%",
  maxWidth: CONTENT_MAX_WIDTH,
  margin: "auto",
  position: "relative",
  marginBottom: 0,
  height: 56,
};

const appBarSX: SxProps<Theme> = {
  backdropFilter: (theme) => `blur(${theme.spacing(2)})`,
  backgroundColor: (theme) => alpha(theme.palette.background.default, isFirefox ? 0.9 : 0.7),
};

export const Header = () => {
  const { isUpSm } = useMediaQuery();
  const { t } = useTranslation("common");
  const { address } = useUserContext();

  return (
    <ElevationScroll>
      <AppBar color="default" sx={appBarSX}>
        <Toolbar variant="dense" sx={toolbarSX}>
          <Grid container spacing={2} alignItems="center" wrap="nowrap">
            {isUpSm && (
              <Grid item xs>
                <Typography variant="h5" fontWeight={700}>
                  {t("yuppify")}
                </Typography>
              </Grid>
            )}
            {!address && (
              <Grid item ml="auto">
                <ConnectWalletButton>{t("connectWallet")}</ConnectWalletButton>
              </Grid>
            )}
            {!!address && (
              <Grid item ml="auto">
                <UserAddress address={address} />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};
