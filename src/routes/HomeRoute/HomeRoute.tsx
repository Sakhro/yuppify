import type { NextPage } from "next";
import Grid from "@mui/material/Grid";

import { PageLayout } from "$layouts/PageLayout";
import { HeroImage } from "$components/HeroImage";
import { HeroActions } from "$components/HeroActions";
import { flexAlignCenterStyles } from "$constants/styles";
import { CollectionNfts } from "$components/CollectionNfts";
import { CollectionSortingProvider } from "$components/SortCollectionBySelect/context";

export const HomeRoute: NextPage = () => (
  <PageLayout>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <HeroImage />
      </Grid>
      <Grid item xs={12} md={6} sx={flexAlignCenterStyles}>
        <HeroActions />
      </Grid>
      <Grid item xs={12}>
        <CollectionSortingProvider>
          <CollectionNfts />
        </CollectionSortingProvider>
      </Grid>
    </Grid>
  </PageLayout>
);
