import type { NextPage } from "next";
import Grid from "@mui/material/Grid";

import { PageLayout } from "$layouts/PageLayout";
import { HeroActions } from "$components/HeroActions";
import { HeroImage } from "$components/HeroImage";
import { ContractProvider } from "$contexts/ContractProvider";
import { QrCode } from "$components/QrCode";
import { flexAlignCenterStyles } from "$constants/styles";

export const HomeRoute: NextPage = () => (
  <PageLayout>
    <ContractProvider>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <HeroImage />
        </Grid>
        <Grid item xs={12} md={6} sx={flexAlignCenterStyles}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <HeroActions />
            </Grid>
            <Grid item xs={12}>
              <QrCode />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ContractProvider>
  </PageLayout>
);
