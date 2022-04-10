import type { AppProps } from "next/app";
import { appWithTranslation } from "next-i18next";
import type { EmotionCache } from "@emotion/react";
import { createEmotionCache } from "$helpers/createEmotionCache";
import { MainLayout } from "$layouts/MainLayout";

import "./global.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp({ Component, pageProps, emotionCache = clientSideEmotionCache }: MyAppProps) {
  return (
    <MainLayout emotionCache={emotionCache}>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default appWithTranslation(MyApp);
