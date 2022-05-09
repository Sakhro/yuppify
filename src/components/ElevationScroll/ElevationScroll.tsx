import React from "react";
import { alpha } from "@mui/material/styles";
import { isFirefox } from "react-device-detect";
import type { Theme, SxProps } from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const scrolledSx: SxProps<Theme> = {
  backgroundImage: "none",
  transition: (theme) => theme.transitions.create("background"),
  backdropFilter: (theme) => `blur(${theme.spacing(2)})`,
  backgroundColor: (theme) => alpha(theme.palette.background.default, isFirefox ? 0.9 : 0.7),
};
const defaultSx: SxProps<Theme> = {
  background: "transparent",
  transition: (theme) => theme.transitions.create("background"),
};

export const ElevationScroll: React.FC = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children as React.ReactElement, {
    elevation: trigger ? 4 : 0,
    sx: trigger ? scrolledSx : defaultSx,
  });
};
