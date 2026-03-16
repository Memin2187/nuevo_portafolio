"use client";

import { Button } from "@/components/ui/button";
import Logo from "../logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useLanguage } from "@/context/language-context";

const Header = () => {
  const { t } = useLanguage();
  const handleDownloadPDF = () => {
    window.print();
  };
  return (
    <header className="navbar top-0 left-0 z-999 w-full absolute">
      <div className="container">
        <nav className="py-7">
          <div className="flex items-center justify-between w-full">
            {/* Logo a la izquierda */}
            <div className="flex-1">
              <Logo />
            </div>

            {/* Botón de descarga al centro */}
            <div className="flex justify-center flex-initial px-2">
              <Button
                variant={"outline"}
                onClick={handleDownloadPDF}
                className="relative overflow-hidden cursor-pointer w-fit h-auto py-1 sm:py-2 px-2 sm:px-4 border border-primary rounded-full group whitespace-nowrap scale-90 sm:scale-100"
              >
                <span className="relative z-10 text-[10px] sm:text-sm md:text-base font-medium text-foreground transition-colors duration-300 group-hover:text-white">
                  {t("nav.download")}
                </span>
              </Button>
            </div>
            
            {/* Toggles a la derecha */}
            <div className="flex items-center justify-end gap-2 flex-1">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
