import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const SkillCard = ({ index, title, icon }) => {
  return (
    <Tilt className=" w-[150px] flex justify-center items-center">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full border border-[#e7e2e2] p-[1px] rounded-[20px] "
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-black rounded-[20px] py-5 px-2 min-h-[100px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>About</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className={`${styles.jpSubText}mt-4 text-[#e7e2e2] text-[17px] max-w-3xl leading-[30px]`}
      >
        はじめまして、チョーニャンリンと申します。ミャンマー出身で、現在は日本電子専門学校のWebデザイン科1年生です。
        趣味はサッカーをすることと、Esportsの試合やサッカーの試合を見ることです。コーディングも好きで、現在はフロントエンドエンジニアを目指して取り組んでいます。
        どうぞよろしくお願いいたします。
      </motion.p>

      <motion.div variants={textVariant()}>
        <h2 className={`${styles.jpHeadText} text-[30px] mt-14`}>Skills</h2>
      </motion.div>
      <div className="mt-16 flex flex-wrap justify-center md:justify-start gap-8">
        {skills.map((service, index) => (
          <SkillCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
