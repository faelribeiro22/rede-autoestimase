import Image, { StaticImageData } from 'next/image'
import { useTranslations } from 'next-intl';
import styles from "./styles.module.scss";

type SponsorLogo = {
  logo: StaticImageData;
}

type SponsorsProps = {
  doadoresLogos1: SponsorLogo[];
  doadoresLogos2: SponsorLogo[];
  org: StaticImageData;
  orgMobile: StaticImageData;
  Button: React.FC<{ label: string }>;
}

const Sponsors = ({doadoresLogos1, doadoresLogos2, org, orgMobile, Button}: SponsorsProps) => {
  const t = useTranslations("home.sponsors");
  const tc = useTranslations("common");

  return (
    <div className={styles.doadoresTop}>
      <div className={styles.doadoresHeader}>
        <div>{t("label")}</div>
        <h1>{t("title")}</h1>
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.topLogos}>
          {doadoresLogos1.map((item, index) => (
            <Image key={index} src={item.logo} alt={tc("logoAlt")}/>
          ))}
        </div>
        <div className={styles.bottomLogos}>
          {doadoresLogos2.map((item, index) => (
            <Image key={index} src={item.logo} alt={tc("logoAlt")} />
          ))}
        </div>
        <div className={styles.org}>
          <Image
            className={styles.orgMobile}
            src={orgMobile}
            alt={t("altLogoOrg", { defaultValue: "Logo Mapa OSC" })}
          />
          <Image
            className={styles.orgDesktop}
            src={org}
            alt={t("altLogoOrg", { defaultValue: "Logo Mapa OSC" })}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonMobile}>
          <Button label={t("buttonMobile")} />
        </div>
        <div className={styles.buttonDesktop}>
          <Button label={t("buttonDesktop")} />
        </div>
      </div>
    </div>
  )
}

export default Sponsors