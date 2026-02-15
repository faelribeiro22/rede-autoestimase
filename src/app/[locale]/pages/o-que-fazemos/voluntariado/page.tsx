import { useTranslations } from "next-intl";
import Banner from "@/components/Banner/Banner";
import CardStep from "@/components/CardStep/CardStep";
import CardService from "@/components/CardService";

import styles from "./styles.module.scss";
import verified from "@/../public/assets/icons/verified.svg";
import "material-symbols";

import voluntariado from "@/../public/assets/images/voluntariado.jpeg";
import groupConversation from "@/../public/assets/images/group-conversation.jpeg";

import groupOfPeople1 from "@/../public/assets/images/groupOfPeople1.jpeg";
import groupOfPeople2 from "@/../public/assets/images/groupOfPeople2.jpeg";
import groupOfPeople3 from "@/../public/assets/images/groupOfPeople3.jpeg";
import groupOfPeople4 from "@/../public/assets/images/groupOfPeople4.jpeg";
import groupOfPeople5 from "@/../public/assets/images/groupOfPeople5.jpeg";
import groupOfPeople6 from "@/../public/assets/images/groupOfPeople6.jpeg";

const servicesData = [
  {
    titleKey: "volunteering.advantages.items.0.title",
    backgroundImage: groupOfPeople1,
  },
  {
    titleKey: "volunteering.advantages.items.1.title",
    backgroundImage: groupOfPeople2,
  },
  {
    titleKey: "volunteering.advantages.items.2.title",
    backgroundImage: groupOfPeople3,
  },
  {
    titleKey: "volunteering.advantages.items.3.title",
    backgroundImage: groupOfPeople4,
  },
  {
    titleKey: "volunteering.advantages.items.4.title",
    backgroundImage: groupOfPeople5,
  },
  {
    titleKey: "volunteering.advantages.items.5.title",
    backgroundImage: groupOfPeople6,
  },
];

export default function Voluntariado() {
  const t = useTranslations("volunteering");
  const tc = useTranslations("common");

  const stepsData = [
    {
      numberKey: "volunteering.howToJoin.steps.0.number",
      titleKey: "volunteering.howToJoin.steps.0.title",
      text: t.rich("howToJoin.steps.0.description", {
        link: (chunks) => (
          <a
            href="mailto:trabalheconosco@redeautoestimase.com"
            style={{ color: "unset", textDecoration: "underline" }}
          >
            {chunks}
          </a>
        )
      }),
    },
    {
      numberKey: "volunteering.howToJoin.steps.1.number",
      titleKey: "volunteering.howToJoin.steps.1.title",
      text: t("howToJoin.steps.1.description"),
    },
    {
      numberKey: "volunteering.howToJoin.steps.2.number",
      titleKey: "volunteering.howToJoin.steps.2.title",
      text: t("howToJoin.steps.2.description"),
    },
    {
      numberKey: "volunteering.howToJoin.steps.3.number",
      titleKey: "volunteering.howToJoin.steps.3.title",
      text: t("howToJoin.steps.3.description"),
    },
  ];

  return (
    <div className={styles.pageContainer}>
      <Banner
        className={styles.banner}
        title={t("bannerTitle")}
        image={voluntariado}
      />
      <section className={styles.volunteering}>
        <div className={styles.icon}>
          <span className="material-symbols-outlined">sentiment_satisfied</span>
        </div>

        <div className={styles.textBox}>
          <p>{t("intro.0")}</p>
          <br />
          <p>{t("intro.1")}</p>
        </div>
      </section>

      <section className={styles.advantages}>
        <h1>{t("advantages.title")}</h1>
        <div className={styles.cardAdvantagesWrapper}>
          {servicesData.map((service, index) => (
            <div className={styles.cardService} key={index}>
              <CardService
                title={t(service.titleKey)}
                icon={verified}
                backgroundImage={service.backgroundImage}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.howToJoin}>
        <Banner
          className={styles.banner}
          title={t("howToJoin.title")}
          image={groupConversation}
        />

        <div className={styles.cardStepsWapper}>
          {stepsData.map((step, index) => (
            <CardStep
              key={index}
              number={t(step.numberKey)}
              title={t(step.titleKey)}
              text={step.text}
            />
          ))}
        </div>

        <h2 className={styles.subtitleBox}>
          {t("howToJoin.footer")}
        </h2>
      </section>
    </div>
  );
}

//
