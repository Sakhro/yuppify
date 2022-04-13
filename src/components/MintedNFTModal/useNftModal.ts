import { useEffect, useState } from "react";
import axios from "axios";

import { useContract } from "$hooks/useContract";
import { useModalContext } from "$components/Modal/context";
import { handleIpfsUrl } from "$helpers/handleIpfsUrl";
import { useContractContext } from "$contexts/ContractProvider";

export const useNftModal = () => {
  const contract = useContract();
  const { mintedTokenId, queryMinted } = useContractContext();
  const [imageSrc, setImageSrc] = useState<string>();
  const { setIsOpen } = useModalContext();

  useEffect(() => {
    if (!contract || !mintedTokenId) {
      return;
    }

    const getTokenUri = async () => {
      const tokenUri = await contract.tokenURI(mintedTokenId);

      const metadata = await axios(handleIpfsUrl(tokenUri));

      setImageSrc(metadata.data.image);
    };

    getTokenUri();
    queryMinted();
  }, [mintedTokenId, contract, queryMinted]);

  useEffect(() => {
    setIsOpen(!!imageSrc);
  }, [imageSrc, setIsOpen]);

  return {
    imageSrc,
  };
};
