"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";

const ComoFazemos = () => {
  const t = useTranslations("whatWeDoDetail.howWeDo");
  const tc = useTranslations("common");

  const sections = [
    {
      index: 0,
      image: "/assets/images/BannerOferecemos.jpg",
    },
    {
      index: 1,
      image: "/assets/images/BannerIntervimos.jpg",
    },
    {
      index: 2,
      image: "/assets/images/BannerAcolhemos.jpg",
    },
    {
      index: 3,
      image: "/assets/images/BannerComunicamos.jpg",
    },
  ];

  const strategyIndexes = [0, 1, 2];

  const strategyIcons = [
    "/assets/icons/growth.png",
    "/assets/icons/digital.png",
    "/assets/icons/finance.png",
  ];

  const [expanded, setExpanded] = useState<boolean[]>(
    Array(strategyIndexes.length).fill(false)
  );

  const toggleExpand = (index: number) => {
    setExpanded((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section className={styles.comoFazemos}>
      <h1 className={styles.title_text}>{t("title")}</h1>
      <h2 className={styles.title}>
        {t.rich("subtitle", {
          noBreak: (chunks) => <span className={styles.noBreak}>{chunks}</span>,
          br: () => <br />
        })}
      </h2>

      <div className={styles.cardsContainer}>
        {sections.map((item) => (
          <div key={item.index} className={styles.card}>
            <Image
              src={item.image}
              alt={t(`sections.${item.index}.title`)}
              className={styles.image}
              width={400}
              height={300}
            />
            <div className={styles.overlay}></div>
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{t(`sections.${item.index}.title`)}</h3>
              <p className={styles.cardDescription}>{t(`sections.${item.index}.description`)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.strategyWrapper}>
        <div className={styles.strategiesContainer}>
          {strategyIndexes.map((strategyIndex, index) => {
            const desc = t(`strategies.${strategyIndex}.description`);
            const paragraphs = desc.split(". ").filter(p => p.length > 0);
            return (
              <div key={index} className={styles.strategyCard}>
                <div className={styles.teste}>
                  <Image
                    src={strategyIcons[index]}
                    alt={t(`strategies.${strategyIndex}.title`)}
                    className={styles.icon}
                    width={64}
                    height={64}
                  />
                  <h3 className={styles.strategyTitle}>{t(`strategies.${strategyIndex}.title`)}</h3>
                </div>
                <div className={styles.description_teste}>
                  {expanded[index] ? (
                    paragraphs.map((paragraph, i) => (
                      <p key={i} className={styles.strategyDescription}>
                        {paragraph.trim() +
                          (paragraph.endsWith(".") ? "" : ".")}
                      </p>
                    ))
                  ) : (
                    <p className={styles.strategyDescription}>
                      {paragraphs[0]}.
                    </p>
                  )}

                  {paragraphs.length > 1 && (
                    <button
                      className={styles.expandButton}
                      onClick={() => toggleExpand(index)}
                    >
                      {expanded[index] ? tc("seeLess") : tc("seeMore")}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComoFazemos;
