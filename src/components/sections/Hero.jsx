"use client";

import Sound from "../hero/Sound";
import Image from "next/image";
import SocialIcons from "@/components/hero/SocialIcons";
import { motion, useInView } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { startScroll } from "@/rtk/scrollSlice";
import { useRef } from "react";

export default function Hero() {
  const isLoading = useSelector(state=> state.preloader)
  const dispatch = useDispatch()

  const parentVariants = {
    // visible: {
    //   transition: {
    //     staggerChildren: 0.5,
    //   },
    // },
  }

  const itemVriants = {
    hidden: { y: 150, opacity: 0 },
    visible: { y: 0, opacity: 100 },
  }
  

  return (
    <div
      className="bg-heroBg bg-no-repeat bg-cover bg-center dynamicHeight p-5 md:p-6 lg:p-8 xl:p-10 relative"
      id="home"
    >

      <Sound />

      <SocialIcons />

      <motion.div
        variants={parentVariants}
        initial='hidden'
        animate={isLoading ? 'hidden' : 'visible'}
        className="font-clash text-center font-medium text-[30px] ssm:text-[34px] xsm:text-[40px] sm:text-[50px] md:text-[60px] mmd:text-[75px]  lg:text-[85px] xl:text-[100px] 2xl:text-[120px]  absolute center w-full -mt-3 xl:-mt-7  ">
        <div className="overflow-hidden">
          <motion.div
            transition={{ duration: 1.2, delay: 1.5, type: "spring" }}
            variants={itemVriants}
          >
            Abdellah El Idrissi
          </motion.div>
        </div>

        <div className="-mt-1  xsm:-mt-[6px] sm:-mt-[10px] md:-mt-[12px] mmd:-mt-[18px] lg:-mt-[21px] xl:-mt-[27px] 2xl:-mt-[38px] overflow-hidden ">
          <motion.div
            transition={{ duration: 1.2, delay: 1.5, type: "spring" }}
            variants={itemVriants}
          >
            Frontend Developer
          </motion.div>
        </div>

        <div className="font-general overflow-hidden   text-[14px] ssm:text-[15px] xsm:text-[16px] md:text-[17px] xl:text-[18px] mt-4 mmd:mt-3 font-normal text-black flex items-center justify-center">
          <motion.div
            variants={itemVriants}
            transition={{ duration: 1.2, delay:1.5, type: "spring" }}
            onAnimationComplete={()=> { dispatch(startScroll()) }}
            className="text"
          >
            Based in Casablanca , Morocco
            <Image
              src={"/flag.png"}
              alt="moroccan flag"
              priority
              width={300}
              height={300}
              className="w-[17px] h-[17px] md:w-[19px] md:h-[19px] inline-block ml-[2px] -mt-[1px] "
            ></Image>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
