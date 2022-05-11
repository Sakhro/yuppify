import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "$hooks/useTranslation";

import { SortBy, useSortCollectionByContext } from "./context";

export const SortCollectionBySelect = () => {
  const { t } = useTranslation("home");
  const { setSortBy, sortBy } = useSortCollectionByContext();

  const handleChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value as SortBy);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="sort-by-id-label">{t("sortBy")}</InputLabel>
      <Select value={sortBy} label={t("sortBy")} onChange={handleChange} labelId="sort-by-id-label">
        <MenuItem value={SortBy.TokenId}>{t("tokenId")}</MenuItem>
        <MenuItem value={SortBy.Rarity}>{t("rarity")}</MenuItem>
      </Select>
    </FormControl>
  );
};
