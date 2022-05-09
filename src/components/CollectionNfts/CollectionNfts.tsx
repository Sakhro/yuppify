import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useTranslation } from "$hooks/useTranslation";
import { CollectionCard, CollectionCardPlaceholder } from "$components/CollectionCard";
import { FilterCollectionBySelect } from "$components/FilterCollectionBySelect";

import { useCollectionNfts } from "./useCollectionNfts";

export const CollectionNfts = () => {
  const { t } = useTranslation("home");
  const { collectionNfts, isLoading } = useCollectionNfts();

  return (
    <Grid container spacing={4}>
      <Grid item container>
        <Grid item xs>
          <Typography variant="h5">{t("allCollectionNfts")}</Typography>
        </Grid>
        <Grid item minWidth={300}>
          <FilterCollectionBySelect />
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        {collectionNfts.map((nft) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={nft.id}>
            <CollectionCard nft={nft} />
          </Grid>
        ))}
        {isLoading && (
          <>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CollectionCardPlaceholder />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CollectionCardPlaceholder />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CollectionCardPlaceholder />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <CollectionCardPlaceholder />
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};
