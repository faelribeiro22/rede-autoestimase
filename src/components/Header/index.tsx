"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

//Components and archives
import "./styles.modules.scss";
import Navbar from "../Navbar";
import Button from "../Button/Button";
import Menu from "../Icons/Menu";
import Close from "../Icons/Close";
import MenuMobile from "../MenuMobile/MenuMobile";
import LanguageFlag from "../LanguageFlag/LanguageFlag";
import SearchBar from "../SearchBar";

const Header = () => {
  const t = useTranslations("navigation");
  const tc = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();

  // Previne scroll quando o menu está aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header>
        <Link href={`/${locale}`} className="logo-desktop">
          <Image
            src="/assets/logo/logo-desktop.svg"
            alt={tc("logoAlt")}
            width={198}
            height={56}
            priority
            quality={100}
          />
        </Link>
        
        {/* Mobile Header */}
        <div className="header-mobile">
          <Link href={`/${locale}`} className="logo-mobile">
            <Image
              src="/assets/logo/logo-mobile.svg"
              alt={tc("logoAlt")}
              width={90}
              height={112}
              priority
              quality={100}
              style={{ width: 'auto', height: '56px' }}
            />
          </Link>
          <Button label={t("donate")} href={`/${locale}/pages/doe`} className="donate" />
          <div className="menu-button" onClick={toggleMenu}>
            {isOpen ? <Close /> : <Menu />}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="navigation">
          <div className="desktop-nav">
            <Navbar />
          </div>
          <div className="main-buttons">
            <SearchBar />
            <Button label={t("donate")} href={`/${locale}/pages/doe`} className="donate" />
          </div>
          <LanguageFlag />
        </div>
      </header>

      {/* Menu Mobile com Overlay */}
      {isOpen && (
        <>
          <div className="menu-overlay" onClick={toggleMenu} />
          <MenuMobile toggleMenu={toggleMenu} />
        </>
      )}
    </>
  );
};

export default Header;
