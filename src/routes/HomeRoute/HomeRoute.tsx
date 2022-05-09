import type { NextPage } from "next";
import Grid from "@mui/material/Grid";

import { PageLayout } from "$layouts/PageLayout";
import { CollectionNfts } from "$components/CollectionNfts";
import { FilterCollectionByProvider } from "$components/FilterCollectionBySelect/context";
import { CollectionHeader } from "$components/CollectionHeader";

export const HomeRoute: NextPage = () => (
  <PageLayout>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <CollectionHeader />
      </Grid>
      <Grid item xs={12}>
        <FilterCollectionByProvider>
          <CollectionNfts />
        </FilterCollectionByProvider>
      </Grid>
    </Grid>
  </PageLayout>
);
