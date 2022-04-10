import React from "react";
import Button from "@mui/material/Button";

import { WalletsModal } from "$components/WalletsModal";
import { useModalContext } from "$components/Modal/context";
import { Image } from "$components/Image";

export interface IProps {
  fullWidth?: boolean;
}

const ICON_SIZE = 21;

export const ConnectWalletButton: React.FC<IProps> = (props) => {
  const { setIsOpen } = useModalContext();

  const handleClick = () => setIsOpen(true);

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClick}
        endIcon={
          <Image alt="Binance icon" height={ICON_SIZE} width={ICON_SIZE} src="/static/images/icons/binance.svg" />
        }
        {...props}
      >
        {props.children}
      </Button>
      <WalletsModal />
    </>
  );
};
