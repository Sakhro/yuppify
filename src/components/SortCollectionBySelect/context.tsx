import React from "react";

import { createContext } from "$helpers/createContext";

export const enum SortBy {
  TokenId = "TokenId",
  Rarity = "Rarity",
}

interface ISortCollectionByContext {
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

const [SortCollectionByContext, useSortCollectionByContext] = createContext<ISortCollectionByContext>();

export const SortCollectionByProvider: React.FC = (props) => {
  const [sortBy, setSortBy] = React.useState(SortBy.TokenId);

  const value = React.useMemo(
    () => ({
      sortBy,
      setSortBy,
    }),
    [sortBy]
  );

  return <SortCollectionByContext.Provider value={value} {...props} />;
};

export { useSortCollectionByContext };
