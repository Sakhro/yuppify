import React from "react";
import NextHead from "next/head";
import { useTranslation } from "$hooks/useTranslation";

interface IProps {
  titleId?: string;
  descriptionId?: string;
}

export const Head: React.FC<IProps> = (props) => {
  const { t } = useTranslation("seo");

  return (
    <NextHead>
      <title>{t(props.titleId as string)}</title>
      <meta name="description" content={t(props.descriptionId as string)} />
    </NextHead>
  );
};

Head.defaultProps = {
  titleId: "title",
  descriptionId: "description",
};
