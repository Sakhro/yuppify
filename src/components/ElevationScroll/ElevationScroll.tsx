import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";

export const ElevationScroll: React.FC = props => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(props.children as React.ReactElement, {
    elevation: trigger ? 4 : 0,
  });
};
