import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  photoshop,
  illustrator,
  figma,
  carSch,
  denshi,
  metro,
  languageSch,
  specialSite,
  quickCard,
  groceryList,
  portfolio,
  framerMotion,
} from "../assets";
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const skills = [
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
    icon: photoshop,
  },
  {
    title: "Illustrator",
    icon: illustrator,
  },
  {
    title: "FramerMotion",
    icon: framerMotion,
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
const works = [
  {
    name: "Webデザイン科 SpecialSite",
    description:
      "日本電子専門学校Webデザイン科の入学検討者向けスペシャルサイトを企画・デザイン・コーディングまで一人で担当し制作。公式サイトにないリアルな学科の魅力を伝えることを目的にし、最終的に学科全員へプレゼンを行いました。",
    tags: [
      {
        name: "html",
        color: "work-textHtml",
      },
      {
        name: "javaScript",
        color: "work-textJavaScript",
      },
      {
        name: "css",
        color: "work-textCss",
      },
    ],
    image: specialSite,
    source_code_link: "https://github.com/",
    pdf_link:
      "https://drive.google.com/drive/u/2/folders/1nDCb_Bi1cwTLLQyrbT-_bYvKP7eMCAEc",
  },
  {
    name: "QuickCard LPページ",
    description:
      "一年生後期の進級制作として、名刺管理アプリ「QuickCard」のランディングページを制作。株式会社サンシーアの開発中アプリを紹介するサイトで、企画から実装まで担当し、企業と連携しながら仕上げました。",
    tags: [
      {
        name: "figma",
        color: "work-textFigma",
      },
      {
        name: "html",
        color: "work-textHtml",
      },
      {
        name: "javaScript",
        color: "work-textJavaScript",
      },
      {
        name: "css",
        color: "work-textCss",
      },
      {
        name: "photoshop",
        color: "work-textPhotoshop",
      },
      {
        name: "illustrator",
        color: "work-textIllustrator",
      },
    ],
    image: quickCard,
    source_code_link: "https://github.com/kyawnyanlynn/QuickCard",
    pdf_link:
      "https://drive.google.com/drive/u/2/folders/1nDCb_Bi1cwTLLQyrbT-_bYvKP7eMCAEc",
  },
  {
    name: "買い物リスト",
    description:
      "授業とは別に個人制作した買い物リストアプリです。買い忘れや重複購入を防ぐために制作しました。スマホのメモアプリでは管理しづらい点を解消し、購入予定と購入済みの品が一目でわかるシンプルで使いやすいデザインに仕上げました。",
    tags: [
      {
        name: "figma",
        color: "work-textFigma",
      },
      {
        name: "html",
        color: "work-textHtml",
      },
      {
        name: "css",
        color: "work-textCss",
      },

      {
        name: "javaScript",
        color: "work-textJavaScript",
      },
      {
        name: "react",
        color: "work-textReact",
      },
    ],
    image: groceryList,
    source_code_link: "https://github.com/kyawnyanlynn/grocery-list-app",
    pdf_link:
      "https://drive.google.com/drive/u/2/folders/1nDCb_Bi1cwTLLQyrbT-_bYvKP7eMCAEc",
  },
  {
    name: "ポートフォリオサイト",
    description:
      "これまでに作ってきたサイトとは違い、あまり触れたことのない Framer Motion や three.js を独学で学びながら、アニメーションを取り入れたり、3D モデルを使ったりと、挑戦しながら制作しました。",
    tags: [
      {
        name: "figma",
        color: "work-textFigma",
      },
      {
        name: "html",
        color: "work-textHtml",
      },
      {
        name: "css",
        color: "work-textCss",
      },
      {
        name: "tailwind",
        color: "work-textTailwind",
      },

      {
        name: "javaScript",
        color: "work-textJavaScript",
      },
      {
        name: "react",
        color: "work-textReact",
      },
      {
        name: "framermotion",
        color: "work-textFramerMotion",
      },
      {
        name: "threejs",
        color: "work-textThreeJs",
      },
      {
        name: "photoshop",
        color: "work-textPhotoshop",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/kyawnyanlynn/portfolio",
    pdf_link:
      "https://drive.google.com/drive/u/2/folders/1nDCb_Bi1cwTLLQyrbT-_bYvKP7eMCAEc",
  },
];

export { skills, educationBg, works };
