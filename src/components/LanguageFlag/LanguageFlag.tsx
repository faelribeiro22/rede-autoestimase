import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { usePathname as useNextPathname } from "next/navigation";
import { useRouter } from "../../i18n/routing";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.modules.scss";

type Language = {
  code: "pt-BR" | "en" | "es";
  name: string;
  image: string;
  alt: string;
};

const languages: Language[] = [
  {
    code: "pt-BR",
    name: "Português",
    image: "/assets/flags/brasil-flag.svg",
    alt: "Bandeira do Brasil indicando que o site está na língua portuguesa",
  },
  {
    code: "es",
    name: "Espanhol",
    image: "/assets/flags/mexico-flag.svg",
    alt: "Bandeira do México indicando que o site está na língua espanhola",
  },
  {
    code: "en",
    name: "Inglês",
    image: "/assets/flags/usa-flag.svg",
    alt: "Bandeira dos EUA indicando que o site está na língua inglesa",
  },
];

const LanguageFlag = () => {
  const [showLanguages, setShowLanguages] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const rawPathname = useNextPathname();

  const selectedLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  const toggleLanguages = (): void => {
    setShowLanguages((prev) => !prev);
  };

  const handleLanguageChange = (languageCode: "pt-BR" | "en" | "es"): void => {
    // Manually strip existing locale prefix if present to avoid recursion (e.g., /en/es)
    const segments = rawPathname.split("/");
    const supportedLocales = ["pt-BR", "en", "es"];
    
    // Check if the first segment is a locale
    if (supportedLocales.includes(segments[1])) {
      segments.splice(1, 1);
    }
    
    const cleanPathname = segments.join("/") || "/";
    
    router.replace(cleanPathname, { locale: languageCode });
    setShowLanguages(false);
  };
  
  return (
    <div className="languages">
      {/* Desktop version */}
      <div className="language-desktop">
        <button
          aria-label={`Selecionar idioma: ${selectedLanguage.name}`}
          className="flag-toggle"
          onClick={toggleLanguages}
        >
          <Image
            src={selectedLanguage.image}
            alt={selectedLanguage.alt}
            width={29.6}
            height={19.2}
          />
            <IoIosArrowDown className="arrow-icon" />
        </button>
        {showLanguages && (
          <div className="language-options">
            {languages
              .filter((lang) => lang.code !== selectedLanguage.code)
              .map((lang) => (
                <button
                  key={lang.code}
                  aria-label={`Escolher site em língua ${lang.name}`}
                  className="flag"
                  onClick={() => handleLanguageChange(lang.code)}
                >
                  <Image
                    src={lang.image}
                    alt={lang.alt}
                    width={29.6}
                    height={19.2}
                  />
                </button>
              ))}
          </div>
        )}
      </div>

      {/* Mobile version */}
      <div className="language-mobile">
        {languages.map((lang) => (
          <button
            aria-label={`Selecionar idioma: ${lang.name}`}
            className="flag-toggle--mobile"
            onClick={() => handleLanguageChange(lang.code)}
            key={lang.code}
            style={{ opacity: lang.code === locale ? 1 : 0.5 }}
          >
            <Image
              src={lang.image}
              alt={lang.alt}
              width={29.6}
              height={19.2}
            />
          </button>
        ))}
      </div>
  </div>
  )
}

export default LanguageFlag