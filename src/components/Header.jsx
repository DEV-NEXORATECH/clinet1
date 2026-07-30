import { useEffect, useState } from "react";
import { logoUrl, navItems, routes } from "../data/site.js";

export default function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [currentPage]);

  const navigate = (path) => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  const handleNavigate = (event, path) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <header className="fixed top-0 w-full z-50 transition-all duration-300 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between">
        <a className="flex h-16 min-w-16 items-center justify-center text-left" href={routes.beranda} onClick={(event) => handleNavigate(event, "beranda")}>
          <img alt="SGC Logo" className="h-14 w-auto object-contain" src={logoUrl} />
        </a>
        <nav aria-label="Navigasi desktop" className="hidden lg:flex items-center gap-5 xl:gap-gutter absolute left-1/2 -translate-x-1/2">
          {navItems.map(([path, label]) => (
            <a
              aria-current={currentPage === path ? "page" : undefined}
              className={currentPage === path ? "transition-colors text-secondary font-bold" : "font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"}
              href={routes[path]}
              key={path}
              onClick={(event) => handleNavigate(event, path)}
            >
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <button className="hidden lg:block bg-primary text-on-primary px-6 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-lg" type="button" onClick={() => navigate("kontak")}>Konsultasi Sekarang</button>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-high"
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className="material-symbols-outlined text-on-surface">{isMenuOpen ? "close" : "menu"}</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-md">
            <span className="material-symbols-outlined text-on-primary text-[20px]">person</span>
          </div>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="lg:hidden border-t border-outline-variant bg-surface-container-lowest shadow-2xl">
          <nav aria-label="Navigasi mobile" className="max-w-container-max mx-auto px-margin-mobile py-4 flex flex-col gap-2">
            {navItems.map(([path, label]) => (
              <a
                aria-current={currentPage === path ? "page" : undefined}
                className={`w-full rounded-lg px-4 py-3 text-left font-label-md text-label-md transition-colors ${
                  currentPage === path ? "bg-secondary text-on-secondary" : "text-on-surface hover:bg-surface-container"
                }`}
                href={routes[path]}
                key={path}
                onClick={(event) => handleNavigate(event, path)}
              >
                {label}
              </a>
            ))}
            <button className="mt-2 w-full bg-primary text-on-primary px-4 py-3 rounded-lg font-label-md text-label-md hover:bg-secondary transition-all shadow-lg" type="button" onClick={() => navigate("kontak")}>
              Konsultasi Sekarang
            </button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
