import { useTranslations } from "next-intl";
import Image from "next/image";
import SplitView from "@/components/SplitView/SplitView";
import Banner from "@/components/Banner/Banner";

import styles from "./styles.module.scss";

import visitaComunidade1 from "@/../public/assets/images/visitaComunidade1.png";
import jovemAtivista from "@/../public/assets/images/jovem-ativista.png";
import arara from "@/../public/assets/images/arara.png";
import indigena from "@/../public/assets/images/indigena.jpeg";
import visitaComunidade2 from "@/../public/assets/images/visita-comunidade-2.png";
import visitaComunidade3 from "@/../public/assets/images/visita-comunidade-3.png";

const bannerData = [
  {
    titleKey: "initiatives.amazon.bannerTitle",
    image: visitaComunidade1,
  },
  {
    titleKey: "initiatives.amazon.bottomBannerTitle",
    image: indigena,
  },
];

const splitViewData = [
  {
    icon: "sentiment_satisfied",
    titleKey: "initiatives.amazon.segments.items.0.title",
    textKey: "initiatives.amazon.segments.items.0.description",
    image: visitaComunidade2,
    alt: "",
    reverse: false,
  },
  {
    icon: "book_2",
    titleKey: "initiatives.amazon.segments.items.1.title",
    textKey: "initiatives.amazon.segments.items.1.description",
    image: visitaComunidade3,
    alt: "",
    reverse: true,
  },
];

export default function SaudeMentalNaAmazonia() {
  const t = useTranslations("initiatives.amazon");
  const tc = useTranslations("common");

  return (
    <div className={styles.pageContainer}>
      <Banner title={t(bannerData[0].titleKey)} image={bannerData[0].image} />

      <div className={styles.contentContainer}>
        <div className={styles.card}>
          <Image src={jovemAtivista} alt={tc("imageAlt")} className={styles.resizeImages} />
        </div>
        <div className={styles.textBox}>
          <p>{t("description")}</p>
        </div>
      </div>

      <div className={styles.splitViewContainer}>
        <h2 className={styles.sectionTitle}>{t("segments.title")}</h2>
        <div className={styles.splitViewWrapper}>
          {splitViewData.map((splitView, index) => (
            <SplitView
              key={index}
              icon={splitView.icon}
              title={t(splitView.titleKey)}
              text={t(splitView.textKey)}
              image={splitView.image}
              alt={t(splitView.titleKey)}
              reverse={splitView.reverse}
            />
          ))}
        </div>
      </div>
      <div className={`${styles.contentContainer} ${styles.section2}`}>
        <div className={styles.ornament}>
          <Image src={arara} alt={tc("imageAlt")} className={styles.resizeImages} />
        </div>
        <div className={styles.textBox}>
          <h2 className={styles.sectionTitle}>{t("howItWorks.title")}</h2>
          <p>{t("howItWorks.description")}</p>
        </div>
      </div>

      <Banner
        className={styles.banner}
        title={t(bannerData[1].titleKey)}
        image={bannerData[1].image}
      />
    </div>
  );
}
