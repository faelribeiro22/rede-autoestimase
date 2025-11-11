"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { IoSearchOutline, IoCloseOutline } from "react-icons/io5";
import { searchData, SearchResult } from "@/data/searchData";
import styles from "./styles.module.scss";

type SearchBarProps = {
  isMobile?: boolean;
};

export default function SearchBar({ isMobile = false }: SearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  
  // Extract locale from pathname
  const locale = pathname?.split('/')[1] || 'pt';

  // Fechar modal ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Focar no input quando abrir
      setTimeout(() => inputRef.current?.focus(), 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Função de busca
  const performSearch = (term: string) => {
    if (!term.trim()) {
      setResults([]);
      return;
    }

    const searchTermLower = term.toLowerCase().trim();
    const searchWords = searchTermLower.split(" ").filter(word => word.length > 0);

    const filteredResults = searchData
      .map(item => {
        let score = 0;

        // Busca no título (peso maior)
        const titleMatch = searchWords.filter(word => 
          item.title.toLowerCase().includes(word)
        ).length;
        score += titleMatch * 10;

        // Busca na descrição
        const descMatch = searchWords.filter(word => 
          item.description.toLowerCase().includes(word)
        ).length;
        score += descMatch * 5;

        // Busca nas keywords
        const keywordMatch = searchWords.filter(word =>
          item.keywords.some(keyword => keyword.includes(word))
        ).length;
        score += keywordMatch * 3;

        // Busca na categoria
        const categoryMatch = searchWords.filter(word =>
          item.category.toLowerCase().includes(word)
        ).length;
        score += categoryMatch * 2;

        return { ...item, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8); // Limitar a 8 resultados

    setResults(filteredResults);
  };

  // Atualizar resultados ao digitar
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchTerm);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);

  const handleResultClick = (url: string) => {
    router.push(`/${locale}${url}`);
    setIsOpen(false);
    setSearchTerm("");
    setResults([]);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchTerm("");
    setResults([]);
  };

  return (
    <>
      {/* Botão de busca */}
      <button 
        className={`${styles.searchButton} ${isMobile ? styles.mobile : ''}`}
        onClick={handleOpen}
        aria-label="Abrir busca"
      >
        <Image
          src="/assets/icons/lupa.png"
          alt="Ícone de busca"
          width={25}
          height={24}
          quality={100}
        />
      </button>

      {/* Modal de busca */}
      {isOpen && (
        <div className={styles.searchOverlay}>
          <div className={styles.searchModal} ref={searchRef}>
            <div className={styles.searchHeader}>
              <div className={styles.searchInputWrapper}>
                <IoSearchOutline className={styles.searchIcon} />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Buscar no site..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                {searchTerm && (
                  <button
                    className={styles.clearButton}
                    onClick={() => setSearchTerm("")}
                    aria-label="Limpar busca"
                  >
                    <IoCloseOutline />
                  </button>
                )}
              </div>
              <button
                className={styles.closeButton}
                onClick={handleClose}
                aria-label="Fechar busca"
              >
                <IoCloseOutline />
              </button>
            </div>

            <div className={styles.searchResults}>
              {searchTerm.trim() === "" ? (
                <div className={styles.emptyState}>
                  <IoSearchOutline className={styles.emptyIcon} />
                  <p>Digite algo para buscar...</p>
                  <div className={styles.suggestions}>
                    <p className={styles.suggestionsTitle}>Sugestões populares:</p>
                    <div className={styles.suggestionTags}>
                      <button onClick={() => setSearchTerm("acolhimento")}>Acolhimento</button>
                      <button onClick={() => setSearchTerm("doação")}>Doação</button>
                      <button onClick={() => setSearchTerm("voluntário")}>Voluntário</button>
                      <button onClick={() => setSearchTerm("empresas")}>Empresas</button>
                      <button onClick={() => setSearchTerm("escolas")}>Escolas</button>
                    </div>
                  </div>
                </div>
              ) : results.length > 0 ? (
                <>
                  <p className={styles.resultsCount}>
                    {results.length} {results.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                  </p>
                  <div className={styles.resultsList}>
                    {results.map((result, index) => (
                      <button
                        key={index}
                        className={styles.resultItem}
                        onClick={() => handleResultClick(result.url)}
                      >
                        <div className={styles.resultCategory}>{result.category}</div>
                        <h3 className={styles.resultTitle}>{result.title}</h3>
                        <p className={styles.resultDescription}>{result.description}</p>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div className={styles.emptyState}>
                  <IoSearchOutline className={styles.emptyIcon} />
                  <p>Nenhum resultado encontrado para &ldquo;{searchTerm}&rdquo;</p>
                  <p className={styles.emptyHint}>
                    Tente usar outras palavras-chave como &ldquo;acolhimento&rdquo;, &ldquo;doação&rdquo; ou &ldquo;voluntário&rdquo;
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
