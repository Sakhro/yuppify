import dynamic from "next/dynamic";

export const QrCode: React.ComponentType<any> = dynamic(() => import("./QrCode").then((mod) => mod.QrCode), {
  ssr: false,
});
