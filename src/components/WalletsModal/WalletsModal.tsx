import React from "react";
import compose from "ramda/src/compose";
import andThen from "ramda/src/andThen";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";

import { Modal } from "$components/Modal";
import { useTranslation } from "$hooks/useTranslation";
import { Image } from "$components/Image";
import { useModalContext } from "$components/Modal/context";

import { useConnectWallet } from "./useConnectWallet";

export const WalletsModal = () => {
  const { t } = useTranslation("common");
  const { setIsOpen } = useModalContext();
  const { isMMLoading, isWCLoading, connectWalletConnect, connectMetaMask } = useConnectWallet();

  const hideModal = () => setIsOpen(false);

  return (
    <Modal maxWidth="md" title={t("selectWallet")}>
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton disabled={isMMLoading} onClick={compose(andThen(hideModal), connectMetaMask)}>
            <ListItemAvatar>
              <Image
                src="/static/images/icons/metamask.webp"
                alt={t("metaMask")}
                width={32}
                height={32}
                objectFit="contain"
              />
            </ListItemAvatar>
            <ListItemText primary={t("metaMask")} />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton disabled={isWCLoading} onClick={compose(andThen(hideModal), connectWalletConnect)}>
            <ListItemAvatar>
              <Image
                src="/static/images/icons/wallet-connect.png"
                alt={t("metaMask")}
                width={32}
                height={32}
                objectFit="contain"
              />
            </ListItemAvatar>
            <ListItemText primary={t("walletConnect")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Modal>
  );
};
