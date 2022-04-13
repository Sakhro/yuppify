import React from "react";
import QRCode from "qrcode.react";
import { isMobile } from "react-device-detect";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { Link } from "$components/Link";
import { CONTRACT_ADDRESS, DEFAULT_CHAIN_ID } from "$constants/config";
import { useTranslation } from "$hooks/useTranslation";

const TW_QR_LINK = `https://link.trustwallet.com/send?asset=c20000714&address=${CONTRACT_ADDRESS}&amount=0.05`;
const MM_QR_LINK = `https://metamask.app.link/send/${CONTRACT_ADDRESS}@${DEFAULT_CHAIN_ID}?value=5e16`;

const TWQRCode = () => (
  <QRCode
    size={160}
    value={TW_QR_LINK}
    imageSettings={{ src: "/static/images/icons/trust-wallet.png", height: 40, width: 40, excavate: false }}
  />
);

const MMQRCode = () => (
  <QRCode
    size={160}
    value={MM_QR_LINK}
    imageSettings={{ src: "/static/images/icons/metamask-icon.webp", height: 40, width: 40, excavate: false }}
  />
);

export const QrCode = () => {
  const { t } = useTranslation("home");

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography gutterBottom>{t("mintWithoutConnect")}:</Typography>
      </Grid>
      {isMobile && (
        <Grid item container spacing={8}>
          <Grid item>
            <Link href={TW_QR_LINK}>
              <TWQRCode />
            </Link>
          </Grid>
          <Grid item>
            <Link href={MM_QR_LINK}>
              <MMQRCode />
            </Link>
          </Grid>
        </Grid>
      )}
      {!isMobile && (
        <Grid item container spacing={8}>
          <Grid item>
            <TWQRCode />
          </Grid>
          <Grid item>
            <MMQRCode />
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};
