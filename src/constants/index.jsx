import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  git,
  figma,
  carSch,
  denshi,
  metro,
  languageSch,
  specialSite,
  quickCard,
  groceryList,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "自己紹介",
  },
  {
    id: "education",
    title: "学歴",
  },
  {
    id: "projects",
    title: "プロジェクト",
  },
  {
    id: "contact",
    title: "連絡",
  },
];

const services = [
  {
    title: "HTML",
    icon: html,
  },
  {
    title: "CSS",
    icon: css,
  },
  {
    title: "JavaScript",
    icon: javascript,
  },
  {
    title: "React",
    icon: reactjs,
  },
  {
    title: "Tailwind",
    icon: tailwind,
  },
  {
    title: "Figma",
    icon: figma,
  },
  {
    title: "Photoshop",
    icon: "",
  },
  {
    title: "Illustrator",
    icon: "",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const educationBg = [
  {
    title: "Metro IT & Japanese Language Center",
    icon: metro,
    iconBg: "#fff",
    date: "2018年 7月 - 2021年 10月",
    points: [
      "母国で高校を卒業し、日本でITエンジニアとして就職することを目的に、日本語とプログラミングを教えてくれる専門学校に入学しました。",
      "卒業後、コロナの影響で就職も難しかったです。",
      "コロナが落ち着いた頃、ミャンマーで軍事クーデターが始まったので、日本に留学しようと思い、留学しました。",
    ],
  },
  {
    title: "浜松日本語学院",
    icon: languageSch,
    iconBg: "#fff",
    date: "2022年 4月 - 2023年 3月",
    points: [
      "友達と一緒に日本に来ました。",
      "浜松日本語学校で1年間日本語を学びました。",
      "1年間で日本語能力試験の3級と2級を取得しました。",
    ],
  },
  {
    title: "静岡工科自動車大学校",
    icon: carSch,
    iconBg: "#000000",
    date: "2023年 4月 - 2024年 3月",
    points: [
      "日本語学校を卒業し、静岡市にある自動車整備士の専門学校に入学しました。",
      "入学後、自分が興味を持っていたこととは違うなぁと思ったので、1年間通って退学しました。",
    ],
  },
  {
    title: "日本電子専門学校",
    company_name: "Meta",
    icon: denshi,
    iconBg: "#fff",
    date: "2024年 4月 - 現在",
    points: [
      "自動車専門学校に通いながら、いろいろな学校を探していたのですが、自分が興味を持っていたWebを深く教えてくれる学校は、日本電子以外には見つからなかったです。",
      "アルバイトや学校の課題などで忙しいですが、入学して本当に良かったです。",
      "これからも頑張っていきます。",
    ],
  },
];
const projects = [
  {
    name: "Webデザイン科 SpecialSite",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: specialSite,
    source_code_link: "https://github.com/",
  },
  {
    name: "QuickCard LPページ",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javaScript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: quickCard,
    source_code_link: "https://github.com/",
  },
  {
    name: "買い物リスト",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: groceryList,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, educationBg, projects };
