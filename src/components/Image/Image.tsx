import React from 'react';

import NextImage, { ImageProps } from 'next/image';

export const Image: React.FC<ImageProps> = (props) => <NextImage {...props} />;
