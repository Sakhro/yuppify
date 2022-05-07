import React from "react";
import styled from "@emotion/styled";
import prop from "ramda/src/prop";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";

import { Image } from "$components/Image";
import { handleIpfsUrl } from "$helpers/handleIpfsUrl";
import { useContractContext } from "$contexts/ContractProvider";
import { ICollectionNft } from "$constants/types";
import { useUserContext } from "$contexts/UserProvider";

interface IProps {
  nft: ICollectionNft;
}

const IMG_SIZE = 250;

const StyledImageWrapper = styled(Box)((props: { theme?: Theme; isOwned: boolean }) => ({
  borderRadius: "100%",
  overflow: "hidden",
  "&::after": {
    position: "absolute",
    width: IMG_SIZE,
    height: IMG_SIZE,
    borderRadius: IMG_SIZE * 1.2,
    animation: props.isOwned ? "ripple 1.2s infinite ease-in-out" : "none",
    border: props.isOwned ? `3px solid ${props.theme?.palette.secondary.main}` : 0,
    content: '""',
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(1)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(1.4)",
      opacity: 0,
    },
  },
}));

export const CollectionCard: React.FC<IProps> = (props) => {
  const { minted } = useContractContext();
  const { nfts } = useUserContext();

  const isMinted = props.nft.id <= minted;
  const nftIds = React.useMemo(() => nfts.map(prop("id")), [JSON.stringify(nfts)]);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12} display="flex" justifyContent="center">
        <StyledImageWrapper
          width={IMG_SIZE}
          height={IMG_SIZE}
          bgcolor={grey[900]}
          display="flex"
          justifyContent="center"
          borderRadius="100%"
          overflow="hidden"
          alignItems="center"
          isOwned={nftIds.includes(props.nft.id)}
        >
          {isMinted && (
            <Image width={IMG_SIZE} height={IMG_SIZE} objectFit="cover" src={handleIpfsUrl(props.nft.image)} />
          )}
          {!isMinted && <QuestionMarkIcon sx={{ height: IMG_SIZE / 3, width: IMG_SIZE / 3 }} htmlColor={grey[600]} />}
        </StyledImageWrapper>
      </Grid>
      <Grid item xs={12}>
        <Typography align="center" variant="h6">
          Rarity Rank: {props.nft.rarity_rank}
        </Typography>
      </Grid>
    </Grid>
  );
};
