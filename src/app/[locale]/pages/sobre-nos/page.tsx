"use client";
import Mapa from "@/components/Map/index";
import Banner from "@/components/Banner/Banner";
import styles from "./styles.module.scss";
import Image from "next/image";
import EmojiDivider from "@/components/emoji/EmojiDivider";
import { StaticImageData } from "next/image";
import AwardsSection from "@/components/AwardsData/AwardsSection";
import AwardsSectionMobile from "@/components/AwardsData/AwardsSectionMobile";
import { useMediaQuery } from "@react-hook/media-query";
import Timeline from "@/components/Timeline/Timeline";
import bannersobrenos from "@/../public/assets/images/bannerSobreNos.jpg";
import perfil from "@/../public/assets/images/premios/perfil.png";
import ODS3 from "@/../public/assets/images/premios/ods3.png";
import ODS5 from "@/../public/assets/images/premios/ods5.png";
import ODS10 from "@/../public/assets/images/premios/ods10.png";
import governofederal from "@/../public/assets/images/premios/Governo.png";
import samgov from "@/../public/assets/images/premios/SAMGOV.png";
import { useTranslations, useLocale } from "next-intl";
import React, { useState } from "react";

const bannerData = {
  titleKey: "about.bannerTitle",
  image: bannersobrenos,
};

const selos = [
  { image: governofederal, alt: "Governo Federal" },
  { image: samgov, alt: "SAMGOV" },
];

interface TeamMember {
  name: string;
  title: string;
  role: string;
  image: StaticImageData;
}

interface TeamData {
  diretoria: TeamMember[];
  conselho: TeamMember[];
  voluntarios: TeamMember[];
}

type TeamCategoryKey = keyof TeamData;

const teamData: TeamData = {
  diretoria: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
  conselho: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
  voluntarios: [
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
    {
      name: "Mariana Nunes",
      title: "CARGO",
      role: "Rede Autoestima-se recebe o reconhecimento do Programa Jovens Transformadores Ashoka",
      image: perfil,
    },
  ],
};

const odsData = [
  {
    icon: ODS3,
    number: "ODS 3",
    titleKey: "about.sustainability.ods.0.title",
    descriptionKey: "about.sustainability.ods.0.description",
  },
  {
    icon: ODS5,
    number: "ODS 5",
    titleKey: "about.sustainability.ods.1.title",
    descriptionKey: "about.sustainability.ods.1.description",
  },
  {
    icon: ODS10,
    number: "ODS 10",
    titleKey: "about.sustainability.ods.2.title",
    descriptionKey: "about.sustainability.ods.2.description",
  },
];


export default function SobreNos() {
  const t = useTranslations("about");
  const tc = useTranslations("common");
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [slideIndex, setSlideIndex] = useState({ conselho: 0, voluntarios: 0 });
  const [fade, setFade] = useState({ conselho: false, voluntarios: false });
  const pageSize = 3;

  function Selo() {
    return (
      <section className={styles.selosContainer}>
        <h3>{t('insignias.title')}</h3>
        <div className={styles.selos}>
          {selos.map((selo, index) => (
            <Image
              key={index}
              src={selo.image}
              alt={selo.alt}
              width={150}
              height={90}
            />
          ))}
        </div>
      </section>
    );
  }

  const handleSlide = (
    key: "conselho" | "voluntarios",
    direction: "left" | "right",
    total: number
  ) => {
    setFade((prev) => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setSlideIndex((prev) => {
        const maxIndex = Math.max(0, Math.ceil(total / pageSize) - 1);
        let next = prev[key] || 0;
        if (direction === "left") next = Math.max(0, next - 1);
        if (direction === "right") next = Math.min(maxIndex, next + 1);
        return { ...prev, [key]: next };
      });
      setFade((prev) => ({ ...prev, [key]: false }));
    }, 400); // tempo igual ao transition do CSS
  };

  return (
    <div className={styles.pageContainer}>
      <Banner
        title={t(bannerData.titleKey)}
        image={bannerData.image}
        className={styles.banner}
      />
      <EmojiDivider />
      <section className={styles.contentSection}>
        <div className={styles.textWarrper}>
          <div className={styles.textContainer}>
            <p>{t('intro.0')}</p>
            <p>{t('intro.1')}</p>
            <p>{t('intro.2')}</p>
          </div>
          <div className={styles.textContainer}>
            <p>{t('intro.3')}</p>
            <p>{t('intro.4')}</p>
          </div>
        </div>
      </section>

      {isMobile ? (
        <>
          <Timeline />
          <AwardsSectionMobile />
        </>
      ) : (
        <>
          <AwardsSection />
          <Selo />
          <Timeline />
        </>
      )}

      <section className={styles.teamSection}>
        <div className={styles.teamSectiontexto}>
          <p>{t('team.label')}</p>
          <h2>{t('team.title')}</h2>
        </div>
        <div className={styles.titletexto}>
          <a>
            {t('team.description')}
          </a>
        </div>
        {[
          { titulo: t('team.categories.board'), chave: "diretoria" as TeamCategoryKey },
          { titulo: t('team.categories.council'), chave: "conselho" as TeamCategoryKey },
          { titulo: t('team.categories.volunteers'), chave: "voluntarios" as TeamCategoryKey },
        ].map((categoria, i) => {
          const membros = teamData[categoria.chave];
          if (categoria.chave === "diretoria") {
            const membrosDiretoria = membros.slice(0, 3);
            return (
              <div key={i} className={styles.teamCategory}>
                <h3>{categoria.titulo}</h3>
                <div className={styles.sliderWrapper}>
                  <div className={styles.teamGrid}>
                    {membrosDiretoria.map(
                      (member: TeamMember, index: number) => (
                        <div key={index} className={styles.teamMember}>
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={200}
                            height={200}
                            className={styles.memberImage}
                          />
                          <h4>{member.name}</h4>
                          <p>{t('team.memberTitle')}</p>
                          <a>{t('team.memberRole')}</a>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            );
          }
          const key = categoria.chave as "conselho" | "voluntarios";
          const current = slideIndex[key] || 0;
          const start = current * pageSize;
          const end = start + pageSize;
          const pagedMembros = membros.slice(start, end);
          const maxIndex = Math.max(
            0,
            Math.ceil(membros.length / pageSize) - 1
          );
          return (
            <div key={i} className={styles.teamCategory}>
              <h3>{categoria.titulo}</h3>
              <div className={styles.sliderWrapper}>
                <button
                  onClick={() => handleSlide(key, "left", membros.length)}
                  className={styles.navButton}
                  disabled={current === 0 || fade[key]}
                >
                  <Image
                    src="/assets/images/sobrenos/arrow-left.png"
                    alt="Voltar"
                    width={40}
                    height={40}
                  />
                </button>
                <div
                  className={`${styles.teamGrid} ${
                    fade[key] ? styles["fade-exit"] : ""
                  }`}
                >
                  {pagedMembros.map((member: TeamMember, index: number) => (
                    <div key={index} className={styles.teamMember}>
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={200}
                        height={200}
                        className={styles.memberImage}
                      />
                      <h4>{member.name}</h4>
                      <p>{t('team.memberTitle')}</p>
                      <a>{t('team.memberRole')}</a>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleSlide(key, "right", membros.length)}
                  className={styles.navButton}
                  disabled={current === maxIndex || fade[key]}
                >
                  <Image
                    src="/assets/images/sobrenos/arrow-right.png"
                    alt="Avançar"
                    width={40}
                    height={40}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </section>

      <section className={styles.citiesSection}>
        <h2>{t('location.label')}</h2>
        <h3>{t('location.title')}</h3>
        <Mapa />
      </section>
      <EmojiDivider />

      <section className={styles.odsSection}>
        <h3>{t('sustainability.label')}</h3>
        <h2>
          {t('sustainability.title')}
        </h2>
        <Image
          src="/assets/images/premios/logoObj.png"
          alt={t('sustainability.altLogoObj')}
          width={334}
          height={48}
          className={styles.objImage}
        />
        <p>
          {t('sustainability.description')}
        </p>
        <div className={styles.odsGrid}>
          {odsData.map((ods, index) => (
            <div key={index} className={styles.odsCard}>
              <Image
                src={ods.icon}
                alt={t(ods.titleKey)}
                width={120}
                height={120}
                className={styles.odsIcon}
              />
              <span className={styles.odsNumber}>{ods.number}</span>
              <h4>{t(ods.titleKey)}</h4>
              <p>{t(ods.descriptionKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.metasContainer}>
        <h2>{t('goals.title')}</h2>
        <div className={styles.metasGrid}>
          <div className={styles.metaItem}>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/Icon-grafico.png"
                alt={tc('iconAlt')}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaText}>
              <h3>{t('goals.items.0.title')}</h3>
              <p>
                {t('goals.items.0.description')}
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-pessoas.png"
                alt={tc('iconAlt')}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol2}>
              <h3>{t('goals.items.1.title')}</h3>
              <p>
                {t('goals.items.1.description')}
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-map.png"
                alt={tc('iconAlt')}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol3}>
              <h3>
                {t('goals.items.2.title')}
              </h3>
              <p>
                {t('goals.items.2.description')}
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-folha.png"
                alt={tc('iconAlt')}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol4}>
              <h3>
                {t('goals.items.3.title')}
              </h3>
              <p>
                {t('goals.items.3.description')}
              </p>
            </div>
            <div className={styles.metaIconWrapper}>
              <Image
                src="/assets/images/sobrenos/icon-sol.png"
                alt={tc('iconAlt')}
                width={32}
                height={32}
              />
            </div>
            <div className={styles.metaTextcol5}>
              <h3>
                {t('goals.items.4.title')}
              </h3>
              <p>
                {t('goals.items.4.description')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
