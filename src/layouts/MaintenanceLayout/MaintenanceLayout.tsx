import React from "react";

import Typography from "@mui/material/Typography";

export const MaintenanceLayout: React.FC = (props) => (
  <>
    {!!process.env.NEXT_PUBLIC_MAINTENANCE_MODE && (
      <Typography variant="h4" pt={10} align="center">
        Website is in Maintenance mode. We'll be right back!
      </Typography>
    )}
    {!process.env.NEXT_PUBLIC_MAINTENANCE_MODE && props.children}
  </>
);
