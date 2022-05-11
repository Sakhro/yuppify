import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "$hooks/useTranslation";

import { FilterBy, useFilterCollectionByContext } from "./context";

export const FilterCollectionBySelect = () => {
  const { t } = useTranslation("home");
  const { setFilterBy, filterBy } = useFilterCollectionByContext();

  const handleChange = (event: SelectChangeEvent) => {
    setFilterBy(event.target.value as FilterBy);
  };

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="filter-by-id-label">{t("filterBy")}</InputLabel>
      <Select value={filterBy} label={t("filterBy")} onChange={handleChange} labelId="filter-by-id-label">
        <MenuItem value={FilterBy.Minted}>{t("minted")}</MenuItem>
        <MenuItem value={FilterBy.All}>{t("all")}</MenuItem>
      </Select>
    </FormControl>
  );
};
