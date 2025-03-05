import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import profile from "../assets/Profile_9.png";

const Profile = () => {
  return (
    // <section className="relative w-full h-screen mx-auto">
    //   <div className="absolute w-full h-full flex flex-row">
    //     <div className="flex flex-col justify-center mt-5">
    //       <div className="mt-6">
    //         <span className={`${styles.heroSubText} text-white`}>
    //           はじめまして、
    //         </span>
    //         <h1 className={`${styles.heroHeadText}`}>
    //           <span className="text-[#FFC93E]">
    //             Lynn &nbsp;
    //             <span className={`${styles.heroSubText} text-white`}>
    //               です。
    //             </span>
    //           </span>
    //         </h1>

    //         <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
    //           フロントエンドエンジニア。
    //         </p>
    //         <span className={`${styles.heroSubText} text-white`}>
    //           よろしくお願いいたします。
    //         </span>
    //       </div>
    //     </div>
    //     <div className="absolute right-0 bottom-0 flex justify-end items-center w-[400px]">
    //       <img className="w-[400px] h-full" src={profile} alt="" />
    //     </div>
    //   </div>

    //   <div className="absolute bottom-0 w-full justify-center items-center hidden md:flex">
    //     <a href="#about">
    //       <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2">
    //         <motion.div
    //           animate={{
    //             y: [0, 24, 0],
    //           }}
    //           transition={{
    //             duration: 1.5,
    //             repeat: Infinity,
    //             repeatType: "loop",
    //           }}
    //           className="w-3 h-3 rounded-full bg-white-100 mb-1"
    //         />
    //       </div>
    //     </a>
    //   </div>
    // </section>
    <section className="relative h-screen flex justify-center">
      <div className="flex flex-row w-[80%]">
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
              フロントエンドエンジニア。
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
