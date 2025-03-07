import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from "../assets/Profile_9.png";

const Profile = () => {
  return (
    <section className="relative h-screen flex justify-center">
      <div className="flex flex-row w-[80%] max-w-7xl">
        <div className="flex flex-col justify-center w-full mt-5 gap-5">
          <div className="mt-20">
            <span className={`${styles.heroSubText} text-white`}>
              はじめまして、
            </span>
            <h1 className={`${styles.heroHeadText}`}>
              <span className="text-[#FFC93E]">
                Lynn &nbsp;
                <span className={`${styles.heroSubText} text-white`}>
                  です。
                </span>
              </span>
            </h1>

            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
              フロントエンドエンジニア
            </p>
            <span className={`${styles.heroSubText} text-white`}>
              よろしくお願いいたします。
            </span>
          </div>
          <div className="bottom-0 items-center flex justify-end pb-20">
            <img className="w-[400px]" src={profile} alt="" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 mt-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="hidden lg:flex sm:w-[35px] sm:border-4 sm:h-[65px] rounded-3xl border-2 border-slate-200 justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white-100 mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Profile;
