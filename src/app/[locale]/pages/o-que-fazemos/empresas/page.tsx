import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import Forms from "@/components/Forms";
import empresasPic from "@/../public/assets/images/empresas/empresas.jpg";
import empresasSplit1 from "@/../public/assets/images/empresas/empresas-split1.jpg";
import empresasSplit2 from "@/../public/assets/images/empresas/empresas-split2.png";
import CardService from "@/components/CardService";
import brain from "@/../public/assets/icons/Brain.png";
import chalkboardTeacher from "@/../public/assets/icons/ChalkboardTeacher.png";
import lightbulb from "@/../public/assets/icons/Lightbulb.png";
import handHeart from "@/../public/assets/icons/HandHeart.png";
import psicoterapiaIndividual from "@/../public/assets/images/psicoterapia-individual.jpeg";
import apoioContinuo from "@/../public/assets/images/apoio-continuo.jpeg";
import treinamentos from "@/../public/assets/images/treinamentos-e-palestras.jpg";
import consultoria from "@/../public/assets/images/consultoria-empresarial.jpg";
import envelope from "@/../public/assets/icons/Envelope-emp.png";
import zap from "@/../public/assets/icons/WhatsappLogo.png";

const cardData = [
  {
    titleKey: "companies.services.items.0.title",
    icon: brain,
    backgroundImage: psicoterapiaIndividual,
  },
  {
    titleKey: "companies.services.items.1.title",
    icon: handHeart,
    backgroundImage: apoioContinuo,
  },
  {
    titleKey: "companies.services.items.2.title",
    icon: chalkboardTeacher,
    backgroundImage: treinamentos,
  },
  {
    titleKey: "companies.services.items.3.title",
    icon: lightbulb,
    backgroundImage: consultoria,
  },
];

const Empresas = () => {
  const t = useTranslations("companies");
  const tc = useTranslations("common");

  return (
    <div className={styles.empresas}>
      <Banner title={t("bannerTitle")} image={empresasPic} className={styles.banner} />
      <section className={styles.splitViewSection}>
        <div className={`${styles.split} ${styles.split1}`}>
          <h1 className={styles.mobileTitle}>
            {t("split1.title")}
          </h1>
          <Image
            src={empresasSplit1}
            alt={tc("imageAlt")}
            className={styles.splitImage}
          />
          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                {t("split1.title")}
              </h1>
              <div className={styles.text}>
                <p>
                  {t("split1.description")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.split} ${styles.split2}`}>
          <h1 className={styles.mobileTitle}>
            {t("split2.title")}
          </h1>
          <Image
            src={empresasSplit2}
            alt={tc("imageAlt")}
            className={styles.splitImage}
          />
          <div className={styles.splitContentContainer}>
            <div className={styles.splitContent}>
              <h1 className={styles.title}>
                {t("split2.title")}
              </h1>
              <div className={styles.text}>
                <p>
                  {t("split2.description")}
                </p>
                <div className={styles.socials}>
                  <a
                    href={`mailto:organizacao@redeautoestimase.com`}
                    className={styles.mail}
                  >
                    <Image src={envelope} alt={tc("mailAlt")} />
                    <p>organizacao@redeautoestimase.com</p>
                  </a>
                  <a
                    href="https://wa.me/5575982133430"
                    className={styles.whatsApp}
                  >
                    <Image src={zap} alt={tc("whatsappAlt")} />
                    <p>+55 (75) 98213-3430</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Services}>{t("services.title")}</h1>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <CardService
              key={index}
              title={t(card.titleKey)}
              icon={card.icon}
              backgroundImage={card.backgroundImage}
            />
          ))}
        </div>
      </section>
      <Forms />
    </div>
  );
};

export default Empresas;
