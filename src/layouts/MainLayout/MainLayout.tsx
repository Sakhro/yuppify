import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as MUIThemeProvider, StyledEngineProvider } from "@mui/material/styles";

import { MUITheme } from "$constants/styles";
import { Web3Provider } from "$contexts/Web3Provider";
import { UserProvider } from "$contexts/UserProvider";
import { SnackbarProvider } from "$components/EnhancedSnackbar/context";
import { MaintenanceLayout } from "$layouts/MaintenanceLayout";

interface IProps {
  emotionCache: EmotionCache;
}

export const MainLayout: React.ComponentType<IProps> = (props) => (
  <StyledEngineProvider injectFirst>
    <CacheProvider value={props.emotionCache}>
      <MUIThemeProvider theme={MUITheme}>
        <CssBaseline />
        <MaintenanceLayout>
          <UserProvider>
            <Web3Provider>
              <SnackbarProvider>{props.children}</SnackbarProvider>
            </Web3Provider>
          </UserProvider>
        </MaintenanceLayout>
      </MUIThemeProvider>
    </CacheProvider>
  </StyledEngineProvider>
);
