"use client";

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const Logo = () => {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evitar error de hidratación
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
        <div className="w-[100px] h-[100px] rounded-2xl bg-muted/10"></div>
    )
  }

  const isDarkMode = resolvedTheme === "dark"
  const logoSrc = isDarkMode ? "/images/logo/logo2.svg" : "/images/logo/logo.svg"

  return (
    <>
        <Link href="/" className="inline-block overflow-hidden rounded-2xl bg-muted/20 p-1 hover:bg-muted/40 transition-colors duration-300">
            <Image 
                src={logoSrc} 
                alt="logo" 
                width={100} 
                height={100} 
                className="rounded-xl object-contain w-auto h-auto max-h-[100px]"
            />
        </Link>
    </>
  )
}

export default Logo