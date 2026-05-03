import { useTranslations } from "next-intl";
import React from "react";
import Banner from "@/components/Banner/Banner";

import styles from "./styles.module.scss";
import vozezDoBemEstar from "@/../public/assets/images/vozes-do-bem-estar.jpg";
import CardNews from "@/components/CardNews/CardNews";

const newsList = Array(8).fill({ title: "JANEIRO", year: "2025", href: "/" });

export default function VozesDoBemEstar() {
  const t = useTranslations("initiatives.vozes");

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Banner
          title={t("title")}
          image={vozezDoBemEstar}
          alt={t("altBanner")}
        />
      </div>

      <section className={styles.descSection}>
        <p className={styles.description}>
          {t("description")}
        </p>
        <div className={styles.newsletter}>
          <h2>{t("newsletterTitle")}</h2>
          <div>COMPONENTE DE EMAIL</div>
        </div>
      </section>

      <section className={styles.newsWrapper}>
        <h2>
          {t("newsTitle")}
        </h2>
        <div className={styles.news}>
          {newsList.map((news, index) => (
            <CardNews
              key={index}
              title={news.title}
              year={news.year}
              href={news.href}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
