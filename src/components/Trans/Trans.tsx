import React from "react";
import { Trans as NextTrans } from "next-i18next";

export const Trans: React.FC<any> = (props) => <NextTrans {...props}>{props.children}</NextTrans>;
