import { useTranslations } from "next-intl";
import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

//Components and archives
import Banner from "@/components/Banner/Banner";
import Button from "@/components/Button/Button";
import bannerAcolhimento from "@/../public/assets/images/acolhimento/banner-acolhimento.jpg";
import smileyDivider from "@/../public/assets/icons/smileyDivider.svg";
import acolhimento from "@/../public/assets/images/acolhimento/acolhimento.jpg";
import carretDown from "@/../public/assets/icons/CaretDown.png";
import guidance from "@/../public/assets/images/acolhimento/guidance.jpg";
import quotation from "@/../public/assets/icons/quotation.png";
import joyce from "@/../public/assets/images/acolhimento/joyce.png";
import juliani from "@/../public/assets/images/acolhimento/juliani.png";
import adalgisa from "@/../public/assets/images/acolhimento/adalgisa.png";
import nathalia from "@/../public/assets/images/acolhimento/nathalia.png";
import regina from "@/../public/assets/images/acolhimento/regina.png";
import lais from "@/../public/assets/images/acolhimento/lais.jpeg";

const bannerData = [
  {
    titleKey: "bannerTitle",
    image: bannerAcolhimento,
  },
];

const stepData = [
  { number: "01", index: 0 },
  { number: "02", index: 1 },
  { number: "03", index: 2 },
  { number: "04", index: 3 },
  { number: "05", index: 4 },
];

const professionalsData = [
  { pic: joyce, name: "Joyce Jordy Penido Burnier", crp: "CRP 06/147759", key: "0" },
  { pic: juliani, name: "Juliani Nascimento Candido", crp: "CRP 02/26810", key: "1" },
  { pic: lais, name: "Lais Bianche Leite", crp: "CRP 06/161127", key: "2" },
  { pic: regina, name: "Regina Leal Teixeira de Melo", crp: "CRP 05/69872", key: "3" },
  { pic: adalgisa, name: "Adalgisa Maria Silva", crp: "CRP 04/69138", key: "4" },
  { pic: nathalia, name: "Nathália de Figueiredo Ferreira", crp: "CRP 13/11066", key: "5" },
];

const Acolhimento = () => {
  const t = useTranslations("psychotherapy");
  const tc = useTranslations("common");

  return (
    <div className={styles.pageWrapper}>
      <Banner
        title={t(bannerData[0].titleKey)}
        image={bannerData[0].image}
        className={styles.banner}
      />

      <section className={styles.divider}>
        <Image src={smileyDivider} alt={tc("dividerAlt")} />
      </section>

      <section className={styles.pageDescription}>
        <div className={styles.paragraphs}>
          <p>{t('description.0')}</p>
          <p>{t('description.1')}</p>
          <p>
            {t.rich('description.2', {
              link: (chunks) => (
                <Link href="/pages/acolhimento/codigo-de-etica" className={styles.pLink}>
                  {chunks}
                </Link>
              ),
              strong: (chunks) => <strong>{chunks}</strong>
            })}
          </p>
        </div>
        <Button
          href="https://bit.ly/ProtocolodeAtendimentoPsicologicoRedeAutoestimase"
          label={t('protocolButton')}
        />
        <p>
          {t('objective')}
        </p>
      </section>

      <section className={styles.acolhimento}>
        <div className={styles.acolhimentoImageContainer}>
          <Image
            src={acolhimento}
            alt={t('acolhimentoTitle')}
            className={styles.acolhimentoImage}
          />
        </div>
        <div className={styles.acolhimentoContent}>
          <h1>{t('acolhimentoTitle')}</h1>
          <div className={styles.steps}>
            {stepData.map((step) => (
              <div key={step.index} className={styles.stepElement}>
                <h2 className={styles.elementNumber}>{step.number}</h2>
                <h3 className={styles.elementTitle}>{t(`steps.${step.index}.title`)}</h3>
                <p className={styles.elementDesc}>{t(`steps.${step.index}.description`)}</p>
              </div>
            ))}

            <div className={styles.stepsFooter}>
              <p>
                {t('footerStep')}
              </p>
            </div>
          </div>
          <div className={styles.acolhimentoRequest}>
            <h1>{t('requestTitle')}</h1>
            <Button
              label={t('requestButton')}
              icon={carretDown}
              className={styles.requestButton}
              dropdownOptions={[
                {
                  label: t('requestOptions.activists'),
                  href: "https://bit.ly/AtendimentoPsicológicoJovensAtivistas-RedeAutoestima-se",
                },
                {
                  label: t('requestOptions.generalPublic'),
                  href: "https://bit.ly/solicitarAtendimentoPsicologicoAutoestimase",
                },
              ]}
            />
            <div className={styles.requestContent}>
              <p>
                {t('requestDisclaimer.0')}
              </p>
              <p>
                {t('requestDisclaimer.1')}
              </p>
            </div>
          </div>
        </div>
        <div className={styles.acolhimentoGuide}>
          <Image
            src={guidance}
            alt={t('guidanceTitle')}
            className={styles.guideImage}
          />

          <div className={styles.guideContainer}>
            <div className={styles.containerContent}>
              <h1>{t('guidanceTitle')}</h1>
              <div className={styles.contentP}>
                <p>
                  {t('guidanceText.0')}
                </p>
                <p>
                  {t('guidanceText.1')}
                </p>
              </div>
              <Button
                href="https://bit.ly/SolicitaratendimentoPaiseResponsáveis"
                label={t('guidanceButton')}
                className="guideButton"
              />
              <p className={styles.lastP}>
                {t('questionsContact')}{" "}
                <Link
                  href={`mailto: assessoriapsicologica@redeautoestimase.com`}
                  className={styles.pLink}
                >
                  assessoriapsicologica@redeautoestimase.com
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.acolhimentoDepoimentos}>
          <div className={styles.depoimentosHeader}>
            <div>{t('testimonials.label')}</div>
            <h1>{t('testimonials.title')}</h1>
          </div>
          <p>
            {t('testimonials.intro')}
          </p>
          <div className={styles.depoimentosGrid}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className={styles.gridElement}>
                <Image src={quotation} alt={tc("logoAlt")} />
                <p>
                  {t(`testimonials.items.${index}`)}
                </p>
              </div>
            ))}
          </div>
          <p>
            {t('testimonials.disclaimer')}
          </p>
        </div>
      </section>
      <section className={styles.professionals}>
        <div className={styles.professionalsHeader}>
          <div>{t('professionals.label')}</div>
          <h1>{t('professionals.title')}</h1>
        </div>
        <div className={styles.professionalsHeaderContent}>
          <p>{t('professionals.intro.0')}</p>
          <p>{t('professionals.intro.1')}</p>
          <p>{t('professionals.intro.2')}</p>
        </div>
        <div className={styles.professionalsCards}>
          {professionalsData.map((prof, index) => (
            <div key={index} className={styles.profCard}>
              <div className={styles.profInfo}>
                <Image
                  src={prof.pic}
                  alt={prof.name}
                  width={120}
                  height={120}
                  className={styles.profPic}
                />
                <div className={styles.infoCredentials}>
                  <h2 className={styles.infoName}>{prof.name}</h2>
                  <p className={styles.infoCrp}>{prof.crp}</p>
                </div>
              </div>
              <div className={styles.profDesc}>
                <p>{t(`professionals.items.${prof.key}.description1`)}</p>
                <p>{t(`professionals.items.${prof.key}.description2`)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.impact}>
        <div className={styles.impactHeader}>
          <div>{t('impact.label')}</div>
          <h1>{t('impact.title')}</h1>
        </div>
        <div className={styles.impactContent}>
          <p>{t('impact.content.0')}</p>
          <p>{t('impact.content.1')}</p>
          <p>{t('impact.content.2')}</p>
          <p>{t('impact.content.3')}</p>
          <p>{t('impact.content.4')}</p>
        </div>
      </section>
    </div>
  );
};

export default Acolhimento;
