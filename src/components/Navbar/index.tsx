"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { IoIosArrowDown } from "react-icons/io";
import "./styles.modules.scss";

interface Page {
  nameKey: string;
  path: string;
  children?: Page[];
}

type NavbarProps = {
  handleCloseMenus?: () => void;
};

const pages: Page[] = [
  {
    nameKey: "home",
    path: "/",
  },
  {
    nameKey: "aboutUs",
    path: "/pages/sobre-nos",
  },
  {
    nameKey: "whatWeDo",
    path: "/pages/o-que-fazemos",
    children: [
      { nameKey: "howWeDo", path: "/pages/o-que-fazemos/como-fazemos" },
      { nameKey: "companies", path: "/pages/o-que-fazemos/empresas" },
      {
        nameKey: "educationalInstitutions",
        path: "/pages/o-que-fazemos/instituicoes-de-ensino",
      },
      { nameKey: "volunteering", path: "/pages/o-que-fazemos/voluntariado" },
    ],
  },
  {
    nameKey: "psychotherapy",
    path: "/pages/acolhimento",
  },
  {
    nameKey: "initiatives",
    path: "/pages/iniciativas",
    children: [
      {
        nameKey: "activistSupport",
        path: "/pages/iniciativas/atendimento-para-ativistas",
      },
      {
        nameKey: "autoViverFund",
        path: "/pages/iniciativas/fundo-autoviver",
      },
      {
        nameKey: "mentalHealthAmazonia",
        path: "/pages/iniciativas/saude-mental-na-amazonia",
      },
      {
        nameKey: "voicesOfWellBeing",
        path: "/pages/iniciativas/vozes-do-bem-estar",
      },
    ],
  },
  {
    nameKey: "transparency",
    path: "/pages/transparencia",
  },
];

const Navbar = ({ handleCloseMenus }: NavbarProps) => {
  const t = useTranslations("navigation");
  const pathname = usePathname();
  const locale = useLocale();

  const closeMenuMenu = (children: boolean) => {
    if (handleCloseMenus && children) {
      handleCloseMenus();
    }
  };

  return (
    <nav className="navbar">
      {pages.map((page, index) => {
        const fullPath = page.path === "/" ? `/${locale}` : `/${locale}${page.path}`;
        const isActive =
          page.path === "/" ? pathname === `/${locale}` : pathname.startsWith(`/${locale}${page.path}`);

        return (
          <div key={index} className="menu-item">
            <Link
              href={fullPath}
              className={`link ${isActive ? "active" : ""}`}
              onClick={() => closeMenuMenu(!page.children)}
            >
              {t(page.nameKey)}
              {page.children && <IoIosArrowDown className="arrowDown" />}
            </Link>
            {page.children && (
              <div className="submenu">
                {page.children.map((child, childIndex) => {
                  const childFullPath = `/${locale}${child.path}`;
                  const isChildActive = pathname.startsWith(childFullPath);

                  return (
                    <Link
                      href={childFullPath}
                      key={childIndex}
                      onClick={handleCloseMenus}
                      className={`submenu-link ${
                        isChildActive ? "active" : ""
                      }`}
                    >
                      {t(child.nameKey)}
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Navbar;
