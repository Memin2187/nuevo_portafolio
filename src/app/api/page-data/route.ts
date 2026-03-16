import { NextResponse } from "next/server";
import { title } from "process";

const contactBar = {
  contactItems: [
    {
      type: "email",
      label: "luisg2187@gmail.com",
      icon: "/images/icon/mail-icon.svg",
      link: "mailto:luisg2187@gmail.com"
    },
    {
      type: "phone",
      label: "+524492860524",
      icon: "/images/icon/call-icon.svg",
      link: "tel:+524492860524"
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      icon: "/images/icon/linkedin-icon.svg",
      link: "https://www.linkedin.com/in/luis-guillermo-gallegos-ortiz-5350391a6/"
    }
  ],
  socialItems: []
};


const educationData = {
  education: [
    {
      title: "Udemy - 2010",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form Koramangala collage."
    },
    {
      title: "Instituto Tecnológico de Aguascalientes - 2015-2020",
      description: "Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
    },
    {
      title: "Conalep III Aguascalientes - 2009-2013",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
    }
  ],
  skills: [
    {
      name: "Next js",
      icon: "/images/home/education-skill/next-js.svg",
      rating: 5
    },
    {
      name: "Phyton",
      icon: "/images/home/education-skill/python.png",
      rating: 5
    },
    {
      name: "React",
      icon: "/images/home/education-skill/react.png",
      rating: 5
    },
    {
      name: "Sql",
      icon: "/images/home/education-skill/sql.png",
      rating: 5
    },
    {
      name: "Typescript",
      icon: "/images/home/education-skill/typescript-icon.svg",
      rating: 5
    },
    {
      name: "Django",
      icon: "/images/home/education-skill/django-icon.svg",
      rating: 4
    }
  ]
}

const contactLinks = {
  socialLinks: [
    {
      title: "Dribble",
      href: "/"
    },
    {
      title: "Facebook",
      href: "/"
    },
    {
      title: "LinkedIn",
      href: "/"
    },
  ],
  contactInfo: [
    {
      type: "email",
      label: "hello@imsruthi.com",
      link: "mailto:hello@imsruthi.com"
    },
    {
      type: "phone",
      label: "+901 5588 2500",
      link: "tel:+90155882500"
    }
  ]
}



export const GET = async () => {
  return NextResponse.json({
    contactBar,
    educationData,
    contactLinks
  });
};
