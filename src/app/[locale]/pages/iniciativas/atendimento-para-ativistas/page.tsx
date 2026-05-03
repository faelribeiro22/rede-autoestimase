import { useTranslations, useLocale } from "next-intl";
import React from "react";
import Image from "next/image";

//Components and archives
import styles from "./styles.module.scss";
import Banner from "@/components/Banner/Banner";
import CardService from "@/components/CardService";
import Button from "@/components/Button/Button";

//Images and icons
import bannerJovens from "@/../public/assets/images/banner-jovens.jpeg";
import psicoterapiaIndividual from "@/../public/assets/images/psicoterapia-individual.jpeg";
import userList from "@/../public/assets/icons/UserList.png";
import apoioContinuo from "@/../public/assets/images/apoio-continuo.jpeg";
import handHeart from "@/../public/assets/icons/HandHeart.png";
import espacosDeAcolhimento from "@/../public/assets/images/espacos-de-acolhimento.jpeg";
import armchair from "@/../public/assets/icons/Armchair.png";
import carretDown from "@/../public/assets/icons/CaretDown.png";
import quotation from "@/../public/assets/icons/quotation.png";

const bannerData = [
  {
    titleKey: "initiatives.activists.bannerTitle",
    image: bannerJovens,
  },
];

const cardData = [
  {
    titleKey: "initiatives.activists.services.items.0.title",
    icon: userList,
    backgroundImage: psicoterapiaIndividual,
    hoverTextKey: "initiatives.activists.services.items.0.description",
  },
  {
    titleKey: "initiatives.activists.services.items.1.title",
    icon: handHeart,
    backgroundImage: apoioContinuo,
    hoverTextKey: "initiatives.activists.services.items.1.description",
  },
  {
    titleKey: "initiatives.activists.services.items.2.title",
    icon: armchair,
    backgroundImage: espacosDeAcolhimento,
    hoverTextKey: "initiatives.activists.services.items.2.description",
  },
];

const AtendimentoParaAtivistas = () => {
  const t = useTranslations("initiatives.activists");
  const tc = useTranslations("common");

  return (
    <div className={styles.pageWrapper}>
      <section className={styles.projectDescription}>
        <Banner title={t(bannerData[0].titleKey)} image={bannerData[0].image} />
        <div className={styles.descriptionSubsection}>
          <p>
            {t("description")}
          </p>
        </div>
      </section>
      <section className={styles.servicesWrapper}>
        <h1 className={styles.h1Desk}>{t("services.title")}</h1>
        <h1 className={styles.h1Mob}>{t("services.titleMob")}</h1>
        <div className={styles.cardGrid}>
          {cardData.map((card, index) => (
            <CardService
              key={index}
              title={t(card.titleKey)}
              icon={card.icon}
              backgroundImage={card.backgroundImage}
              hoverText={t(card.hoverTextKey)}
            />
          ))}
        </div>
        <Button
          label={t("services.button")}
          href="https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se"
        />
      </section>
      <section className={styles.impact}>
        <h1>{t("impact.title")}</h1>
        <p>{t("impact.p1")}</p>
        <p>{t("impact.p2")}</p>
        <p>{t("impact.p3")}</p>
        <div className={styles.seeMore}>
          <h3>{t("impact.articleTitle")}</h3>
          <Button
            label={t("impact.clickHere")}
            icon={carretDown}
            className={styles.content}
            classMenu={styles.menu}
            classItem={styles.item}
            dropdownOptions={[
              {
                label: "English",
                href: "https://bit.ly/BriefYoungActivists_RedeAutoestima-se",
              },
              {
                label: "Português",
                href: "https://bit.ly/Artigo_saudementalJovensAtivistas",
              },
            ]}
          />
        </div>
      </section>
      <section className={styles.testimonials}>
        <h1>{t("testimonials.title")}</h1>
        <div className={styles.testimonialGrid}>
          {[0, 1, 2].map((index) => (
            <div key={index}>
              <Image src={quotation} alt={tc("quoteAlt")} />
              <p>
                {t(`testimonials.items.${index}`)}
              </p>
            </div>
          ))}
        </div>
        <Button
          label={t("services.button")}
          href="https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se"
        />
      </section>
    </div>
  );
};

export default AtendimentoParaAtivistas;
