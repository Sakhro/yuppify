import React from "react";
import QRCode from "qrcode.react";
import { isMobile } from "react-device-detect";
import Typography from "@mui/material/Typography";

import { useTranslation } from "$hooks/useTranslation";
import { CONTRACT_ADDRESS } from "$constants/config";
import { Link } from "$components/Link";

const QR_LINK = `https://link.trustwallet.com/send?asset=c20000714&address=${CONTRACT_ADDRESS}&amount=0.05`;

export const QrCode = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <Typography gutterBottom>{t("mintWithoutConnect")}:</Typography>
      {isMobile && (
        <Link href={QR_LINK}>
          <QRCode size={160} value={QR_LINK} />
        </Link>
      )}
      {!isMobile && <QRCode size={160} value={QR_LINK} />}
    </>
  );
};
