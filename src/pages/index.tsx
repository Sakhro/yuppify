import { GetStaticPropsContext } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { SHARED_NAMESPACES } from "$constants/config";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, SHARED_NAMESPACES.concat(["home"]))),
    },
  };
}

export { HomeRoute as default } from "$routes/HomeRoute";
