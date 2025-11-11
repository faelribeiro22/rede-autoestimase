import Image, { StaticImageData } from 'next/image'
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
  return (
    <div className={styles.doadoresTop}>
      <div className={styles.doadoresHeader}>
        <div>FAZEM A DIFERENÇA</div>
        <h1>Doadores</h1>
      </div>
      <div className={styles.logosContainer}>
        <div className={styles.topLogos}>
          {doadoresLogos1.map((item, index) => (
            <Image key={index} src={item.logo} alt="Logo"/>
          ))}
        </div>
        <div className={styles.bottomLogos}>
          {doadoresLogos2.map((item, index) => (
            <Image key={index} src={item.logo} alt="Logo" />
          ))}
        </div>
        <div className={styles.org}>
          <Image
            className={styles.orgMobile}
            src={orgMobile}
            alt="Logo indicando que fazemos parte do Mapa das Organizações da Sociedade Civil"
          />
          <Image
            className={styles.orgDesktop}
            src={org}
            alt="Logo indicando que fazemos parte do Mapa das Organizações da Sociedade Civil"
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.buttonMobile}>
          <Button label="Seja Nosso parceiro" />
        </div>
        <div className={styles.buttonDesktop}>
          <Button label="Conheça nossa lista de apoiadores" />
        </div>
      </div>
    </div>
  )
}

export default Sponsors