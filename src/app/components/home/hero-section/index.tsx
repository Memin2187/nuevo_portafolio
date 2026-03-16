"use client";

import Image from "next/image";
import { useLanguage } from "@/context/language-context";

const index = () => {
  const { t } = useLanguage();
  return (
    <section className="relative hero-section overflow-hidden pt-35 md:pt-40 pb-12 lg:pb-30 xl:pt-52">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
          <div className="shrink-0">
            <Image
              src={"/images/home/banner/banner-img.jpeg"}
              alt="banner-img"
              width={200}
              height={200}
              className="rounded-full aspect-square object-cover shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-8">
                <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight">{t("hero.greeting")}</h1>
                <div className="wave">
                  <Image
                    src={"/images/home/banner/wave-icon.svg"}
                    alt="wave-icon"
                    width={93}
                    height={93}
                    className=""
                  />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-semibold leading-tight">{t("hero.role")}</h1>
            </div>
            <p className="text-muted-foreground font-normal max-w-md xl:max-w-xl">
              {t("hero.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
