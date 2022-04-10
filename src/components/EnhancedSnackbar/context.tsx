import React from "react";
import always from "ramda/src/always";
import mergeLeft from "ramda/src/mergeLeft";

import { EnhancedSnackbar } from "$components/EnhancedSnackbar";
import { ISnackbarState } from "$components/EnhancedSnackbar/types";

const initialState: ISnackbarState = {
  open: false,
  message: "",
  type: "info",
};

const SnackbarContext = React.createContext(always as React.Dispatch<React.SetStateAction<ISnackbarState>>);

const SnackbarProvider: React.FC = (props) => {
  const [state, setState] = React.useState(initialState);

  function onClose() {
    setState(mergeLeft({ open: false }));
  }

  return (
    <SnackbarContext.Provider value={setState}>
      {props.children}
      <EnhancedSnackbar
        open={state.open}
        type={state.type}
        onClose={onClose}
        action={state.action}
        message={state.message}
      />
    </SnackbarContext.Provider>
  );
};

function useSnackbarContext() {
  const context = React.useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbarContext must be inside SnackbarProvider");
  }

  return context;
}

export { SnackbarProvider, useSnackbarContext };
