import React from "react";

import Typography from "@mui/material/Typography";

export const MAINTENANCE_MODE: boolean =
  !!process.env.NEXT_PUBLIC_MAINTENANCE_MODE && JSON.parse(process.env.NEXT_PUBLIC_MAINTENANCE_MODE as string);

export const MaintenanceLayout: React.FC = (props) => (
  <>
    {MAINTENANCE_MODE && (
      <Typography variant="h4" pt={10} align="center">
        Website is in Maintenance mode. We'll be right back!
      </Typography>
    )}
    {!MAINTENANCE_MODE && props.children}
  </>
);
