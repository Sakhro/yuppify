import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { IProps } from "./types";

const ANCHOR_ORIGIN = {
  horizontal: "left",
  vertical: "bottom",
} as const;

const EnhancedSnackbar: React.FC<IProps> = (props) => (
  <Snackbar open={props.open} onClose={getOnClose(props)} anchorOrigin={ANCHOR_ORIGIN}>
    <Alert sx={{ width: "100%" }} severity={props.type} action={props.action}>
      {props.message}
    </Alert>
  </Snackbar>
);

function getOnClose(props: IProps) {
  return props.action ? undefined : props.onClose;
}

export { EnhancedSnackbar };
