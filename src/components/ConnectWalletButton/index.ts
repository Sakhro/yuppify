import { withModalProvider } from "$components/Modal/withModalProvider";

import { ConnectWalletButton as View, IProps } from "./ConnectWalletButton";

export const ConnectWalletButton = withModalProvider<IProps>(View);
