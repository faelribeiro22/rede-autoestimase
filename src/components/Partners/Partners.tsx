import { Doadores } from "@/app/[locale]/page";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";

type PartnersProps = {
  partnersLogo: Doadores[];
}

const Partners = ({ partnersLogo }: PartnersProps) => {
  const t = useTranslations("home.partners");
  const tc = useTranslations("common");

  return (
    <div className={styles.doadoresBottom}>
      <div className={styles.doadoresHeader}>
        <h1 className={styles.headerMobile}>{t("titleMobile")}</h1>
        <h1 className={styles.headerDesktop}>{t("titleDesktop")}</h1>
      </div>
      <div className={styles.partLogos}>
        {partnersLogo.map((item, index) => (
          <Image key={index} src={item.logo} alt={tc("logoAlt")} />
        ))}
      </div>
    </div>
  )
}

export default Partners