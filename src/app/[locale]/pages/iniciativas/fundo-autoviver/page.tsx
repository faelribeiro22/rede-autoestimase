import { useTranslations } from "next-intl";
import React from "react";
import Image from "next/image";
import SplitView from "@/components/SplitView/SplitView";
import Banner from "@/components/Banner/Banner";

import styles from "./styles.module.scss";

import fundoAutoViver from "@/../public/assets/images/fundo-autoviver.png";
import bannerComoFunciona from "@/../public/assets/images/Como-funciona.jpg";
import bannerGrandepasso from "@/../public/assets/images/um-grande-passo.jpg";
import bannerSustentabilidade from "@/../public/assets/images/Sustentabilidade.jpg";
import bannerEmpoderar from "@/../public/assets/images/Empoderar.jpg";
import bannerEducar from "@/../public/assets/images/Educar.jpg";

const bannerData = [
  {
    titleKey: "initiatives.fundo.bannerTitle",
    image: fundoAutoViver,
  },
];

const cardContent = [
  {
    titleKey: "initiatives.fundo.segments.items.0.title",
    descriptionKey: "initiatives.fundo.segments.items.0.description",
    image: bannerEmpoderar,
    alt: "",
    reverse: false,
  },
  {
    titleKey: "initiatives.fundo.segments.items.1.title",
    descriptionKey: "initiatives.fundo.segments.items.1.description",
    image: bannerEducar,
    alt: "",
    reverse: false,
  },
  {
    titleKey: "initiatives.fundo.segments.items.2.title",
    descriptionKey: "initiatives.fundo.segments.items.2.description",
    image: bannerSustentabilidade,
    alt: "",
    reverse: false,
  },
];

const splitViewData = [
  {
    titleKey: "initiatives.fundo.howItWorks.title",
    textKey: "initiatives.fundo.howItWorks.description",
    image: bannerComoFunciona,
    alt: "",
    reverse: false,
  },
  {
    titleKey: "initiatives.fundo.bigStep.title",
    textKey: "initiatives.fundo.bigStep.description",
    image: bannerGrandepasso,
    alt: "",
    reverse: true,
  },
];

export default function AutoViver() {
  const t = useTranslations("initiatives.fundo");

  return (
    <div className={styles.pageContainer}>
      <Banner
        title={t(bannerData[0].titleKey)}
        image={bannerData[0].image}
        className={styles.banner}
      />

      <div className={styles.contentContainer}>
        <div className={styles.textBox}>
          <p>{t("description")}</p>
        </div>
      </div>

      <div className={styles.cardContent}>
        <h2 className={styles.sectionTitle}>{t("segments.title")}</h2>
        <div className={styles.cardsContainer}>
          {cardContent.map((card, index) => (
            <div className={styles.card} key={index}>
              <Image
                src={card.image}
                alt={t(card.titleKey)}
                className={styles.cardImage}
              />
              <div className={styles.cardWarrper}>
                <h3 className={styles.cardTitle}>{t(card.titleKey)}</h3>
                <p className={styles.cardDescription}>{t(card.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.splitViewContainer}>
        <div className={styles.splitViewWrapper}>
          {splitViewData.map((splitView, index) => (
            <SplitView
              key={index}
              title={t(splitView.titleKey)}
              text={t(splitView.textKey)}
              image={splitView.image}
              alt={t(splitView.titleKey)}
              reverse={splitView.reverse}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
