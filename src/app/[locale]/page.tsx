"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import { StaticImageData } from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import { useTranslations } from "next-intl";

//Components and files
import Slider from "@/components/Slider";
import Button from "@/components/Button/Button";
import MediaSection from "@/components/MediaSection";
import smileyDivider from "@/../public/assets/icons/smileyDivider.svg";
import advocacy from "@/../public/assets/images/home/advocacy.png";
import comunicacao from "@/../public/assets/images/home/comunicacao.png";
import psicossocial from "@/../public/assets/images/home/psicossocial.png";
import saibaArrow from "@/../public/assets/icons/saiba-mais-arrow.png";
import folha from "@/../public/assets/icons/afolha.png";
import ashoka from "@/../public/assets/icons/ashoka.png";
import onu from "@/../public/assets/icons/onu.png";
import youth from "@/../public/assets/icons/youth.png";
import ce from "@/../public/assets/icons/ce.png";
import open from "@/../public/assets/icons/opensociety.png";
import inia from "@/../public/assets/icons/inia.png";
import mlabs from "@/../public/assets/icons/mlabs.png";
import peace from "@/../public/assets/icons/peacefirst.png";
import slack from "@/../public/assets/icons/slack.png";
import icl from "@/../public/assets/icons/icl.png";
import google from "@/../public/assets/icons/google.png";
import micro from "@/../public/assets/icons/microsoft.png";
import git from "@/../public/assets/icons/github.png";
import canva from "@/../public/assets/icons/canva.png";
import org from "@/../public/assets/icons/organizacoes.png";
import orgMobile from "@/../public/assets/icons/org-mobile.png";
import ashokaCol from "@/../public/assets/icons/ashoka-col.png";
import afolhaCol from "@/../public/assets/icons/afolha-col.png";
import meta from "@/../public/assets/icons/metaverso-col.png";
import pinheiro from "@/../public/assets/icons/pinheiro-col.png";
import bemtevi from "@/../public/assets/icons/bemtevi.png";
import plus from "@/../public/assets/icons/pluscircle.png";
import minus from "@/../public/assets/icons/minuscircle.png";
import Sponsors from "@/components/Sponsors/Sponsors";
import Partners from "@/components/Partners/Partners";
import Link from "next/link";
import RecognitionSlider from "@/components/RecognitionSlider";

type Card = {
  titleKey: string;
  descriptionKey: string;
  image: StaticImageData;
  alt: string;
  link: string;
};

const cardContentData: Card[] = [
  {
    titleKey: "home.whatWeDo.cards.psychosocial.title",
    descriptionKey: "home.whatWeDo.cards.psychosocial.description",
    image: psicossocial,
    alt: "Assistência psicossocial",
    link: "pages/acolhimento",
  },
  {
    titleKey: "home.whatWeDo.cards.communication.title",
    descriptionKey: "home.whatWeDo.cards.communication.description",
    image: comunicacao,
    alt: "",
    link: "pages/iniciativas/vozes-do-bem-estar",
  },
  {
    titleKey: "home.whatWeDo.cards.advocacy.title",
    descriptionKey: "home.whatWeDo.cards.advocacy.description",
    image: advocacy,
    alt: "",
    link: "pages/iniciativas/atendimento-para-ativistas",
  },
];

type Reconhecimento = {
  icon: StaticImageData;
  subject: string;
};

const reconContent: Reconhecimento[] = [
  {
    icon: folha,
    subject: "Prêmio Empreendedor Social pela Folha de São Paulo",
  },
  {
    icon: ashoka,
    subject: "Reconhecimento da Rede Global Ashoka",
  },
  {
    icon: onu,
    subject: "Representante do Brasil na Delegação Jovem da ONU - YA",
  },
  {
    icon: youth,
    subject:
      "Representante do Brasil na Delegação Jovem do Banco Mundial- Youth Summit",
  },
  {
    icon: ce,
    subject: "Palestrante na Conferência Ethos 360°",
  },
];

export type Doadores = {
  logo: StaticImageData;
};

const doadoresLogos1: Doadores[] = [
  {
    logo: open,
  },
  {
    logo: inia,
  },
  {
    logo: mlabs,
  },
  {
    logo: peace,
  },
  {
    logo: slack,
  },
];

const doadoresLogos2: Doadores[] = [
  {
    logo: icl,
  },
  {
    logo: google,
  },
  {
    logo: micro,
  },
  {
    logo: git,
  },
  {
    logo: canva,
  },
];

const parceiros: Doadores[] = [
  {
    logo: ashokaCol,
  },
  {
    logo: afolhaCol,
  },
  {
    logo: meta,
  },
  {
    logo: pinheiro,
  },
  {
    logo: bemtevi,
  },
];



const SeeMore = ({
  id,
  activeId,
  setActiveId,
  title,
  text,
}: {
  id: number;
  activeId: number | null;
  setActiveId: (id: number | null) => void;
  title: string;
  text: string;
}) => {
  const isActive = id === activeId;

  return (
    <div
      className={styles.seeMoreElement}
      onClick={() => setActiveId(isActive ? null : id)}
    >
      <div className={styles.seeMoreMain}>
        <div>{title}</div>
        {isActive ? (
          <Image
            src={minus}
            alt="Menos conteúdo"
            className={styles.rotateIcon}
          />
        ) : (
          <Image src={plus} alt="Mais conteudo" className={styles.rotateIcon} />
        )}
      </div>
      {isActive && <p className={styles.seeMoreText}>{text}</p>}
    </div>
  );
};

export default function Home() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const t = useTranslations();

  return (
    <div>
      <Slider />
      <section className={styles.homeAbout}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutHeader}>
            <div>{t('home.about.label')}</div>
            <h1>{t('home.about.title')}</h1>
          </div>
          <div className={styles.aboutVideoMobile}>
            <iframe
              // width="560"
              // height="315"
              src="https://www.youtube.com/embed/I0hvYveJDLQ"
              title="YouTube video player"
              // frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              // allowfullscreen
            ></iframe>
          </div>
          <p className={styles.aboutDesc}>
            {t('home.about.description')}
          </p>

          <Button
            label={t('home.about.button')}
            className={styles.aboutButton}
            href="https://bit.ly/onepageAutoestima-se"
          />
        </div>

        <div className={styles.aboutVideoDesk}>
          <iframe
            src="https://www.youtube.com/embed/I0hvYveJDLQ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </section>

      <section className={styles.divider}>
        <Image
          src={smileyDivider}
          alt="Ícone de divisão de secção"
          className={styles.dividerIcon}
        />
      </section>

      <section className={styles.acolhimento}>
        <div className={styles.acolhimentoHeader}>
          <div>{t('home.whatWeDo.label')}</div>
          <h1>{t('home.whatWeDo.title')}</h1>
        </div>
        <div className={styles.acolhimentoContent}>
          <div className={styles.cardContainer}>
            {cardContentData.map((item, index) => (
              <div key={index} className={styles.cardElement}>
                <Link href={item.link}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardElementContent}>
                    <div className={styles.cardDesc}>
                      <h2>{t(item.titleKey)}</h2>
                      <p>{t(item.descriptionKey)}</p>
                    </div>
                    <button>
                      <Image
                        src={saibaArrow}
                        alt='Seta indicando o botão "SAIBA MAIS"'
                      />{" "}
                      <div>{t('home.whatWeDo.readMore')}</div>
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.acolhimentoResultados}>
          <div className={styles.resultadosHeader}>
            <div>{t('home.results.label')}</div>
            <h1>{t('home.results.title')}</h1>
            <p>
              {t('home.results.description')}
            </p>
          </div>
          <div className={styles.acolhimentoCount}>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>
                <h1>
                  <CountUp end={1000} duration={3} separator="" />
                </h1>
              </div>
              <h2>{t('home.results.stats.sessions')}</h2>
            </div>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>
                <h1>
                  <CountUp end={100} duration={3} separator="" />
                </h1>
              </div>
              <h2>{t('home.results.stats.cities')}</h2>
            </div>
            <div className={styles.countElement}>
              <div className={styles.countTop}>
                <div className={styles.countIcon}>+</div>

                <h1>
                  <CountUp end={18} duration={3} separator="" />
                </h1>
              </div>
              <h2>{t('home.results.stats.states')}</h2>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.conquistas}>
        <div className={styles.conquistasHeader}>
          <div>{t('home.recognition.label')}</div>
          <h1>{t('home.recognition.title')}</h1>
        </div>
        <div className={styles.conquistasCardContainer}>
          <div className={styles.conquistasDesktop}>
            {reconContent.map((item, index) => (
              <div key={index} className={styles.conquistasCardElement}>
                <Image src={item.icon} alt="Logo da matéria" />
                <p>{item.subject}</p>
              </div>
            ))}
          </div>
          <div className={styles.conquistasMobile}>
            <RecognitionSlider reconContent={reconContent} />
          </div>
        </div>
      </section>

      <section className={styles.midia}>
        <div className={styles.midiaHeader}>
          <div>{t('home.media.label')}</div>
          <h1>{t('home.media.title')}</h1>
        </div>
        <MediaSection />
      </section>

      <section className={styles.doadores}>
        <Sponsors
          doadoresLogos1={doadoresLogos1}
          doadoresLogos2={doadoresLogos2}
          org={org}
          orgMobile={orgMobile}
          Button={Button}
        />
        <Partners partnersLogo={parceiros} />
      </section>

      <section className={styles.divider}>
        <Image src={smileyDivider} alt="Ícone de divisão de secção" />
      </section>

      <section className={styles.faq}>
        <div className={styles.faqHeader}>
          <div>{t('home.faq.label')}</div>
          <h1>{t('home.faq.title')}</h1>
          <p>
            {t('home.faq.description')}
          </p>
        </div>
        <div className={styles.seeMoreWrapper}>
          {[0, 1, 2, 3, 4].map((index) => (
            <SeeMore
              key={index}
              id={index}
              activeId={activeId}
              setActiveId={setActiveId}
              title={t(`home.faq.questions.${index}.question`)}
              text={t(`home.faq.questions.${index}.answer`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
