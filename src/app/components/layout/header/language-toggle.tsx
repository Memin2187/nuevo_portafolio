"use client"

import * as React from "react"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "ES" : "EN")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative overflow-hidden flex items-center gap-1.5 font-medium px-2 rounded-full border border-border hover:bg-muted group"
    >
      <span className="relative z-10 flex items-center gap-1.5 group-hover:text-white transition-colors duration-300">
        <Globe className="h-4 w-4" />
        <span className="text-xs sm:text-sm">{language}</span>
      </span>
    </Button>
  )
}
