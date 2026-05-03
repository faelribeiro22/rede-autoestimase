"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import CardService from "@/components/CardService";
import Forms from "@/components/Forms";
import instituicoesPic from "@/../public/assets/images/instituicoes-de-ensino.png";
import instituicoesSplit1 from "@/../public/assets/images/instituicoes-split1.png";
import instituicoesSplit2 from "@/../public/assets/images/instituicoes-split2.png";
import bookOpenText from "@/../public/assets/icons/BookOpenText.png";
import chats from "@/../public/assets/icons/Chats.png";
import chalkboardTeacher from "@/../public/assets/icons/ChalkboardTeacher.png";
import microphoneStage from "@/../public/assets/icons/MicrophoneStage.png";
import microscope from "@/../public/assets/icons/Microscope.png";
import smileySticker from "@/../public/assets/icons/SmileySticker.png";
import student from "@/../public/assets/icons/Student.png";
import rodas from "@/../public/assets/images/instituicoes-de-ensino/rodas-de-conversa.jpg";
import workshops from "@/../public/assets/images/instituicoes-de-ensino/workshops.jpg";
import documentarios from "@/../public/assets/images/instituicoes-de-ensino/documentarios.jpg";
import estudos from "@/../public/assets/images/instituicoes-de-ensino/estudos-cientificos.jpg";
import felicidade from "@/../public/assets/images/instituicoes-de-ensino/programa-felicidade.jpg";
import bolsas from "@/../public/assets/images/instituicoes-de-ensino/bolsas-de-estudo.jpg";
import receber from "@/../public/assets/images/instituicoes-de-ensino/receber.jpg";

const cardData = [
  {
    titleKey: "institutions.services.items.0.title",
    icon: chats,
    backgroundImage: rodas,
  },
  {
    titleKey: "institutions.services.items.1.title",
    icon: chalkboardTeacher,
    backgroundImage: workshops,
  },
  {
    titleKey: "institutions.services.items.2.title",
    icon: microphoneStage,
    backgroundImage: documentarios,
  },
  {
    titleKey: "institutions.services.items.3.title",
    icon: microscope,
    backgroundImage: estudos,
  },
  {
    titleKey: "institutions.services.items.4.title",
    icon: smileySticker,
    backgroundImage: felicidade,
  },
  {
    titleKey: "institutions.services.items.5.title",
    icon: student,
    backgroundImage: bolsas,
  },
  {
    titleKey: "institutions.services.items.6.title",
    icon: bookOpenText,
    backgroundImage: receber,
  },
];

const Instituicoes = () => {
  const t = useTranslations("institutions");
  const tc = useTranslations("common");

  return (
    <div className={styles.instituicoes}>
      <Banner
        title={t("bannerTitle")}
        image={instituicoesPic}
        className={styles.banner}
      />

      <section className={styles.splitViewSection}>
        <div className={`${styles.split} ${styles.split1}`}>
          <h1 className={styles.mobileTitle}>
            {t("split1.title")}
          </h1>

          <Image
            src={instituicoesSplit1}
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
            src={instituicoesSplit2}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Services}>{t("services.title")}</h1>
        <div className={styles.cardGrid}>
          <div className={styles.mainGrid}>
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <CardService
                key={index}
                title={t(cardData[index].titleKey)}
                icon={cardData[index].icon}
                backgroundImage={cardData[index].backgroundImage}
              />
            ))}
          </div>
          <div className={styles.secGrid}>
            <CardService
              title={t(cardData[6].titleKey)}
              icon={cardData[6].icon}
              backgroundImage={cardData[6].backgroundImage}
              heightClassName={styles.cardHeight}
              widthClassName={styles.cardWidth}
            />
          </div>
        </div>
        <h2 className={styles.pServices}>
          {t("services.footer")}
        </h2>
      </section>
      <Forms />
    </div>
  );
};

export default Instituicoes;
