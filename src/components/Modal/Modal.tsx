import React from "react";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";

import { useModalContext } from "./context";

interface IProps {
  title?: string;
  onClose?: VoidFunction;
  disabledBackdropClose?: boolean;
  actions?: React.ReactNode;
  maxWidth?: DialogProps["maxWidth"];
  dialogProps?: Record<string, any>;
}

export const Modal: React.FC<IProps> = (props) => {
  const { isOpen, setIsOpen } = useModalContext();

  function handleClose() {
    if (props.disabledBackdropClose) {
      return;
    }

    if (props.onClose) {
      props.onClose();
    }

    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={props.maxWidth} {...props.dialogProps}>
      {props.title && <DialogTitle>{props.title}</DialogTitle>}
      <DialogContent dividers sx={{ p: 0 }}>
        {props.children}
      </DialogContent>
      {props.actions && <DialogActions>{props.actions}</DialogActions>}
    </Dialog>
  );
};

Modal.defaultProps = {
  maxWidth: "md",
  disabledBackdropClose: false,
};
