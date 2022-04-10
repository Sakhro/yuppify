import { AlertColor } from '@mui/material/Alert';

export interface ISnackbarState {
  open: boolean;
  message: string;
  type: AlertColor;
  action?: React.ReactNode[];
}

export interface IProps extends ISnackbarState {
  onClose: VoidFunction;
}

export type SetSnackbarAction = (value: React.SetStateAction<ISnackbarState>) => void;
