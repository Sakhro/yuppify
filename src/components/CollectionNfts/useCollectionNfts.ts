import { useCallback, useEffect, useState } from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import pathOr from "ramda/src/pathOr";
import { axios } from "$services/axios";
import { ICollectionNft } from "$constants/types";
import { COSSACKS_CONTRACT_ADDRESS } from "$constants/config";

const queryNfts = () => axios.get<ICollectionNft[]>(`/api/${COSSACKS_CONTRACT_ADDRESS}/nfts`);

export const useCollectionNfts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [collectionNfts, setCollectionNfts] = useState<ICollectionNft[]>([]);

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  const queryCollectionNfts = useCallback(
    compose(andThen(compose(stopLoading, setCollectionNfts, pathOr([], ["data"]))), queryNfts, startLoading),
    []
  );

  useEffect(() => {
    queryCollectionNfts();
  }, []);

  return {
    isLoading,
    collectionNfts,
  };
};
