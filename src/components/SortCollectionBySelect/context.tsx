import React from "react";

import { createContext } from "$helpers/createContext";

export const enum SortBy {
  Rarity = "Rarity",
  Id = "Id",
}

interface ICollectionSortingContext {
  sortBy: SortBy;
  setSortBy: React.Dispatch<React.SetStateAction<SortBy>>;
}

const [CollectionSortingContext, useCollectionSortingContext] = createContext<ICollectionSortingContext>();

export const CollectionSortingProvider: React.FC = (props) => {
  const [sortBy, setSortBy] = React.useState(SortBy.Id);

  const value = React.useMemo(
    () => ({
      sortBy,
      setSortBy,
    }),
    [sortBy]
  );

  return <CollectionSortingContext.Provider value={value} {...props} />;
};

export { useCollectionSortingContext };
