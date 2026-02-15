import { useLocale, useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Link from "next/link";
import Image from "next/image";

// Components
import EmailDisplay from "../EmailDisplay/EmailDisplay";
import SocialMediaList from "../SocialMediaList/SocialMedia";
import Newsletter from "../Newsletter/Newsletter";

const Footer = () => {
  const t = useTranslations("footer");
  const tn = useTranslations("navigation");
  const tc = useTranslations("common");
  const th = useTranslations("home");
  const locale = useLocale();

  return (
    <footer className={styles.footerContainer}>
      <SocialMediaList />
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>{t("index")}</h3>
          <p>
            <Link href={`/${locale}`} className={styles.footerLink}>
              {tn("home")}
            </Link>
          </p>
          <p>
            <Link href={`/${locale}/pages/sobre-nos`} className={styles.footerLink}>
              {tn("aboutUs")}
            </Link>
          </p>
          <p>
            <Link href={`/${locale}/pages/acolhimento`} className={styles.footerLink}>
              {tn("psychotherapy")}
            </Link>
          </p>
          <p>
            <Link href={`/${locale}#recognition`} className={styles.footerLink}>
              {th("recognition.label")}
            </Link>
          </p>
          <p>
            <Link href={`/${locale}/pages/transparencia`} className={styles.footerLink}>
              {tn("transparency")}
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/adesaos%C3%B3ciodoador"
              className={styles.footerLink}
            >
              {t("termsOfUse")}
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/LGPDRedeautoestimase"
              className={styles.footerLink}
            >
              {t("privacyPolicy")}
            </Link>
          </p>
          <p>
            <Link
              href="https://bit.ly/adesaos%C3%B3ciodoador"
              className={styles.footerLink}
            >
              {t("membershipTerm")}
            </Link>
          </p>
        </div>

        <div className={styles.footerSection}>
          <h3>{t("contact")}</h3>
          <EmailDisplay
            email="organizacao@redeautoestimase.com"
            label={t("mainEmail")}
          />
          <EmailDisplay
            email="assessoriapsicologica@redeautoestimase.com"
            label={t("psychologicalAssessment")}
          />
          <EmailDisplay
            email="comercialsocial@redeautoestimase.com"
            label={t("commercialSocial")}
          />
          <EmailDisplay
            email="mobilizacao@redeautoestimase.com"
            label={t("mobilizationPartners")}
          />
        </div>

        <div className={styles.footerSection}>
          <div className={styles.footerNewsletter}>
            <Newsletter />
          </div>
          <div className={styles.footerTimetable}>
            <h3>{t("schedules")}</h3>
            <p>{t("weekdaySchedule")}</p>
            <p>{t("saturdaySchedule")}</p>
          </div>
        </div>
      </div>

      <div className={styles.footerLogo}>
        <Image
          src="/assets/logo/logo-white.svg"
          alt={tc("logoAlt")}
          width={150}
          height={50}
        />
      </div>

      <div className={styles.footer_warning}>
        <p>
          {t("warning")}
        </p>
      </div>

      <div className={styles.footer_info}>
        <div className={styles.footer_content_wrapper}>
          <div className={styles.footer_legal}>
            <span>© {t("rightsReserved")}</span>
            <span>{t("socialReason")}</span>
            <span>{t("cnpj")}</span>
          </div>
          <div className={styles.footer_credits}>
            <span>{t("designBy")}</span>
            <a href="mailto:gustavo.bastos@gmail.com">Gustavo Bastos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
