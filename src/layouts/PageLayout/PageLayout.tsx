import React from "react";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";

import { Header } from "$components/Header";
import { CONTENT_MAX_WIDTH } from "$constants/styles";
import { Footer } from "$components/Footer";
import { Head } from "$components/Head";

export const PageLayout: React.FC = (props) => (
  <>
    <Head />
    <Header />
    <Grid container mx="auto" height="100%" direction="column" maxWidth={CONTENT_MAX_WIDTH} wrap="nowrap">
      <Grid item>
        <Toolbar />
      </Grid>
      <Grid item xs py={2} px={3} component="main">
        {props.children}
      </Grid>
      <Grid item p={3}>
        <Footer />
      </Grid>
    </Grid>
  </>
);
