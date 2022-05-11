import React from "react";
import Grid from "@mui/material/Grid";

import { CollectionCard, CollectionCardPlaceholder } from "$components/CollectionCard";
import { FilterCollectionBySelect } from "$components/FilterCollectionBySelect";
import { SortCollectionBySelect } from "$components/SortCollectionBySelect";

import { useCollectionNfts } from "./useCollectionNfts";
import { useMediaQuery } from "$hooks/useMediaQuery";

export const CollectionNfts = () => {
  const { isUpMd } = useMediaQuery();
  const { collectionNfts, isLoading } = useCollectionNfts();

  return (
    <Grid container spacing={4}>
      <Grid item container spacing={2} justifyContent="space-between">
        <Grid item xs={12} md>
          <FilterCollectionBySelect />
        </Grid>
        {isUpMd && <Grid item xs={12} md />}
        <Grid item xs={12} md>
          <SortCollectionBySelect />
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
