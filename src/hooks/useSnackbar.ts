import { useCallback } from "react";
import mergeLeft from "ramda/src/mergeLeft";
import curry from "ramda/src/curry";

import { AlertColor } from "@mui/material/Alert";

import { useSnackbarContext } from "$components/EnhancedSnackbar/context";

import { useTranslation } from "$hooks/useTranslation";

interface IMessage {
  id: string;
  values: Record<string, any>;
}

export const useSnackbar = () => {
  const { t } = useTranslation("snackbar");
  const setSnackbarState = useSnackbarContext();

  const showSnackbar = useCallback(
    (type: AlertColor) => (messageCostructor: string | IMessage, action?: React.ReactNode[]) => {
      const message =
        typeof messageCostructor === "string"
          ? t(messageCostructor)
          : t(messageCostructor.id, messageCostructor.values);

      setSnackbarState({
        type,
        action,
        message,
        open: true,
      });
    },
    [setSnackbarState]
  );

  const closeSnackbar = () => {
    setSnackbarState(mergeLeft({ open: false }));
  };

  const showErrorSnackbar = useCallback(showSnackbar("error"), [showSnackbar]);

  const showSuccessSnackbar = useCallback(showSnackbar("success"), [showSnackbar]);

  const showInfoSnackbar = useCallback(showSnackbar("info"), [showSnackbar]);

  return {
    showInfoSnackbar,
    showErrorSnackbar,
    showSuccessSnackbar,
    closeSnackbar,
  };
};
