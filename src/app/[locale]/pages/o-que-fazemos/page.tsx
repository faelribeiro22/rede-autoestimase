import React from "react";
import { useTranslations } from "next-intl";

const Trabalho = () => {
  const t = useTranslations("whatWeDo");
  return <div>{t("title")}</div>;
};

export default Trabalho;
