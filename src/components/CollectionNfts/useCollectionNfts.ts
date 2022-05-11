import { useCallback, useEffect, useState } from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import sortBy from "ramda/src/sortBy";
import prop from "ramda/src/prop";
import pathOr from "ramda/src/pathOr";
import { axios } from "$services/axios";
import { ICollectionNft } from "$constants/types";
import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";
import { useContractContext } from "$contexts/ContractProvider";
import { FilterBy, useFilterCollectionByContext } from "$components/FilterCollectionBySelect/context";
import { SortBy, useSortCollectionByContext } from "$components/SortCollectionBySelect/context";

const queryNfts = () => axios.get<ICollectionNft[]>(`/api/${COSSACKS_CONTRACT_ADDRESS}/nfts`);

const filterNftsBy = (filterBy: FilterBy, minted: number) => (nfts: ICollectionNft[]) => {
  if (filterBy === FilterBy.Minted) {
    return nfts.filter((nft) => nft.id <= minted);
  }

  if (filterBy === FilterBy.All) {
    return nfts;
  }

  return nfts;
};

const sortNftsBy = (sortByArg: SortBy) => {
  if (sortByArg === SortBy.Rarity) {
    return sortBy(prop("rarity_rank"));
  }

  if (sortByArg === SortBy.TokenId) {
    return sortBy(prop("id"));
  }

  return sortBy(prop("id"));
};

export const useCollectionNfts = () => {
  const { minted } = useContractContext();
  const { filterBy } = useFilterCollectionByContext();
  const { sortBy } = useSortCollectionByContext();
  const [isLoading, setIsLoading] = useState(false);
  const [collectionNfts, setCollectionNfts] = useState<ICollectionNft[]>([]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const filterNfts = useCallback(filterNftsBy(filterBy, minted), [filterBy, minted]);
  const sortNfts = useCallback(sortNftsBy(sortBy), [sortBy]);

  const queryCollectionNfts = useCallback(
    compose(
      andThen(compose(stopLoading, setCollectionNfts, sortNfts, filterNfts, pathOr([], ["data"]))),
      queryNfts,
      startLoading
    ),
    [filterNfts, sortNfts]
  );

  useEffect(() => {
    queryCollectionNfts();
  }, [queryCollectionNfts]);

  return {
    isLoading,
    collectionNfts,
  };
};
