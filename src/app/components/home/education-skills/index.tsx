"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/language-context";

const EducationSkills = () => {
  const { t } = useLanguage();
  const [educationData, setEducationData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEducationData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section>
      <div className="border-t border-muted overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={"/images/home/education-skill/edu-skill-vector.svg"}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-foreground pb-7 mb-9 xl:mb-16">
              <h2>{t("education.title")} & {t("skills.title")}</h2>
              <p className="text-xl text-primary">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row print:flex-row items-center lg:items-start print:items-start gap-10 xl:gap-20 print:break-inside-avoid">
              <div className="w-full lg:max-w-md print:max-w-[40%] flex flex-col gap-6 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6 print:break-inside-avoid">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-background flex items-center justify-center border-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-foreground"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5 className="text-foreground">{t(`edu.${index + 1}.title`)}</h5>
                        <p className="font-normal text-muted-foreground">{t(`edu.${index + 1}.desc`)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-2 xs:grid-cols-3 gap-5 xl:gap-7 w-full print:break-inside-avoid">
                {educationData?.skills?.map((value: any, index: any) => {
                  return (
                    <div
                      key={index}
                      className="p-4 xl:p-6 border border-muted rounded-lg flex flex-col gap-5 sm:gap-10 items-center justify-between bg-card print:bg-white print:text-black print:break-inside-avoid"
                    >
                      <div className="flex flex-col items-center gap-5">
                        <Image
                          src={value?.icon}
                          alt="icon"
                          width={70}
                          height={70}
                          className={
                            ["Typescript", "Django", "Sql"].includes(value?.name) 
                              ? "" 
                              : "dark:brightness-0 dark:invert print:filter-none"
                          }
                        />
                        <p className="text-foreground font-normal">{value?.name}</p>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="9"
                              height="9"
                              rx="4.5"
                              className={i < value?.rating ? "fill-primary" : "fill-muted"}
                            />
                          </svg>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
