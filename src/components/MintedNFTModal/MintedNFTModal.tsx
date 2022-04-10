import React from "react";

import { Modal } from "$components/Modal";
import { useTranslation } from "$hooks/useTranslation";
import { Image } from "$components/Image";
import { handleIpfsUrl } from "$helpers/handleIpfsUrl";

import { useNftModal } from "./useNftModal";

export const MintedNFTModal: React.FC = () => {
  const { t } = useTranslation("home");
  const { imageSrc } = useNftModal();

  return (
    <Modal maxWidth="md" title={t("mintedCossack")}>
      {imageSrc && <Image alt="Cossack" width={400} height={400} src={handleIpfsUrl(imageSrc)} />}
    </Modal>
  );
};
