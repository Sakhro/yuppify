import { withModalProvider } from "$components/Modal/withModalProvider";

import { MintButton as View } from "./MintButton";

export const MintButton = withModalProvider(View);
