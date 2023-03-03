import React from "react";
import { discount, ani1 } from "../assets";
import styles from "../style";
import GetStarted from "./get-started";

const Intro = () => (
  <section
    id="home"
    className={`flex md:flex-row flex-col ${styles.paddingY} justify-center items-center`}
  >
    <div className="w-full mx-20 flex justify-center items-center">
      <div className={`w-1/3 mr-4 flex justify-end items-center`}>
        <img
          src={ani1}
          alt="profilepic"
          className="w-96 h-96 relative z-[5] rounded-full"
        />
      </div>
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-col h-max">
          <div className="flex flex-row justify-start items-start w-full z-[1] opacity-100">
            <div className="flex-1 font-poppins ">
              <h3 className="font-semibold ss:text-[40px] text-[28px] text-white ss:leading-[100px] leading-[75px]">
                Hi, its me
              </h3>
              <h1 className="font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
                <span className="text-gradient">Anirudhan</span> 😎
              </h1>
            </div>
          </div>
          <div className="relative ss:-mt-[80px] ml-5 -pt-[60px] w-full z-[0]">
            <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white opacity-10 ss:leading-[100px] leading-[75px]">
              Developer 👨‍💻
            </h1>
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[100%] mt-5 text-justify`}>
          An enthusiastic application developer, who have about 5 years
          experience in software development in which about 2 years is spent on
          web applications.
        </p>
      </div>
    </div>
  </section>
);

export default Intro;
