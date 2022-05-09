import React from "react";
import inc from "ramda/src/inc";
import equals from "ramda/src/equals";
import ifElse from "ramda/src/ifElse";
import always from "ramda/src/always";

import Box from "@mui/material/Box";

import { Image } from "$components/Image";

export const CollectionAvatar = () => {
  const [index, setIndex] = React.useState(1);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex(ifElse(equals(5), always(1), inc));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box borderRadius={2} overflow="hidden">
      <Image alt="Cossack" src={`/static/images/${index}.png`} layout="responsive" width={1024} height={1024} />
    </Box>
  );
};
