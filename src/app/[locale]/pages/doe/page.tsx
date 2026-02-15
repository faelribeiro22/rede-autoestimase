import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import Image from "next/image";

import bannerDoe from "@/../public/assets/images/doe/banner.png";

const bannerData = {
  titleKey: "donate.bannerTitle",
  image: bannerDoe,
};

export default function Doe() {
  const t = useTranslations("donate");
  const tc = useTranslations("common");

  return (
    <div className={styles.container}>
      <Banner title={t(bannerData.titleKey)} image={bannerData.image} />
      <section className={styles.introSection}>
        <h1 className={styles.title}>{t("intro.title")}</h1>
        <p className={styles.description}>{t("intro.description")}</p>
      </section>
      <div className={styles.iframeWrapper}>
        <iframe
          src="https://redeautoestimase.paradoar.org/?mode=iframe"
          frameBorder="0"
          title={t("iframeTitle")}
          width="100%"
          height="100%"
          style={{ minHeight: "100vh", overflow: "hidden" }}
        />
      </div>

      <section className={styles.infoSection}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.sectionSubtitle}>{t("impact.label")}</span>
          <br />
          <span className={styles.highlight}>
            {t("impact.title")}
          </span>
        </h2>
        <div className={styles.cardsWrapper}>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/logo.png"
              alt={tc("logoAlt")}
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>{t("impact.items.0.title")}</h3>
            <p>
              {t("impact.items.0.description")}
            </p>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/selo.png"
              alt={tc("insigniaAlt")}
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>{t("impact.items.1.title")}</h3>
            <p>
              {t("impact.items.1.description")}
            </p>
            <button className={styles.ctaButton}>{t("impact.items.1.button")}</button>
          </div>
          <div className={styles.card}>
            <Image
              src="/assets/images/doe/servico.png"
              alt={tc("serviceAlt")}
              width={120}
              height={120}
              className={styles.cardIcon}
            />
            <h3>{t("impact.items.2.title")}</h3>
            <p>
              {t("impact.items.2.description")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
