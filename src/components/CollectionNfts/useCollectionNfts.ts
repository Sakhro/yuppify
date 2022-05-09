import { useCallback, useEffect, useState } from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import pathOr from "ramda/src/pathOr";
import { axios } from "$services/axios";
import { ICollectionNft } from "$constants/types";
import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";
import { useContractContext } from "$contexts/ContractProvider";
import { FilterBy, useFilterCollectionByContext } from "$components/FilterCollectionBySelect/context";

const queryNfts = () => axios.get<ICollectionNft[]>(`/api/${COSSACKS_CONTRACT_ADDRESS}/nfts`);

const sortNfts = (filterBy: FilterBy, minted: number) => (nfts: ICollectionNft[]) => {
  if (filterBy === FilterBy.Minted) {
    return nfts.filter((nft) => nft.id <= minted);
  }

  if (filterBy === FilterBy.All) {
    return nfts;
  }

  return nfts;
};

export const useCollectionNfts = () => {
  const { minted } = useContractContext();
  const { filterBy } = useFilterCollectionByContext();
  const [isLoading, setIsLoading] = useState(false);
  const [collectionNfts, setCollectionNfts] = useState<ICollectionNft[]>([]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const filterNfts = useCallback(sortNfts(filterBy, minted), [filterBy, minted]);

  const queryCollectionNfts = useCallback(
    compose(
      andThen(compose(stopLoading, setCollectionNfts, filterNfts, pathOr([], ["data"]))),
      queryNfts,
      startLoading
    ),
    [filterNfts]
  );

  useEffect(() => {
    queryCollectionNfts();
  }, [queryCollectionNfts]);

  return {
    isLoading,
    collectionNfts,
  };
};
