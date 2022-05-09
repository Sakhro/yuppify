import { useCallback, useEffect, useState } from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import pathOr from "ramda/src/pathOr";
import { axios } from "$services/axios";
import { ICollectionNft } from "$constants/types";
import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";
import { SortBy, useCollectionSortingContext } from "$components/SortCollectionBySelect/context";
import { useContractContext } from "$contexts/ContractProvider";

const queryNfts = () => axios.get<ICollectionNft[]>(`/api/${COSSACKS_CONTRACT_ADDRESS}/nfts`);

const sortNfts = (sortBy: SortBy, minted: number) => (nfts: ICollectionNft[]) => {
  if (sortBy === SortBy.Id) {
    return nfts.filter((nft) => nft.id <= minted);
  }

  if (sortBy === SortBy.Rarity) {
    return nfts;
  }

  return nfts;
};

export const useCollectionNfts = () => {
  const { minted } = useContractContext();
  const { sortBy } = useCollectionSortingContext();
  const [isLoading, setIsLoading] = useState(false);
  const [collectionNfts, setCollectionNfts] = useState<ICollectionNft[]>([]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const sortByMinted = useCallback(sortNfts(sortBy, minted), [sortBy, minted]);

  const queryCollectionNfts = useCallback(
    compose(
      andThen(compose(stopLoading, setCollectionNfts, sortByMinted, pathOr([], ["data"]))),
      queryNfts,
      startLoading
    ),
    [sortByMinted]
  );

  useEffect(() => {
    queryCollectionNfts();
  }, [queryCollectionNfts]);

  return {
    isLoading,
    collectionNfts,
  };
};
