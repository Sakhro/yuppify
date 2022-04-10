import React from "react";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";

import { shortAddress } from "$helpers/shortAddress";
import { useLogout } from "$hooks/useLogout";

interface IProps {
  address: string;
}

export const UserAddress: React.FC<IProps> = (props) => {
  const logout = useLogout();

  return (
    <Button
      color="secondary"
      variant="outlined"
      onClick={logout}
      endIcon={<LogoutIcon />}
      sx={{ textTransform: "none" }}
    >
      {shortAddress(props.address)}
    </Button>
  );
};
