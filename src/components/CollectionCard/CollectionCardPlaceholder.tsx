import React from "react";
import Skeleton from "@mui/material/Skeleton";

export const CollectionCardPlaceholder = () => (
  <>
    <Skeleton variant="rectangular" height={250} />
    <Skeleton variant="text" />
  </>
);
