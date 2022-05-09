import React from "react";

import { createContext } from "$helpers/createContext";

export const enum FilterBy {
  All = "All",
  Minted = "Minted",
}

interface IFilterCollectionByContext {
  filterBy: FilterBy;
  setFilterBy: React.Dispatch<React.SetStateAction<FilterBy>>;
}

const [FilterCollectionByContext, useFilterCollectionByContext] = createContext<IFilterCollectionByContext>();

export const FilterCollectionByProvider: React.FC = (props) => {
  const [filterBy, setFilterBy] = React.useState(FilterBy.Minted);

  const value = React.useMemo(
    () => ({
      filterBy,
      setFilterBy,
    }),
    [filterBy]
  );

  return <FilterCollectionByContext.Provider value={value} {...props} />;
};

export { useFilterCollectionByContext };
