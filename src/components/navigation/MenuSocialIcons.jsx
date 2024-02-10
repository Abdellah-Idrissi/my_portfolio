"use client"
import MagneticEffect from "@/components/animated/MagneticEffect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiBento } from "react-icons/si";


export default function MenuSocialIcons() {

  
  return (
    <div 
    className="absolute bottom-5 left-5 md:left-6 md:bottom-6 lg:left-8 lg:bottom-8 xl:left-10 xl:bottom-10 flex flex-col gap-y-4 xl:gap-y-[18px]">
      <MagneticEffect>
      <a href="https://www.linkedin.com/in/abdellah-moumen-el-idrissi/" target="_blank">
        <FaLinkedin className="w-[17px] c2 h-[17px] md:w-[18px] md:h-[18px] xl:w-[19px] xl:h-[19px]  hover:text-[#0077b5]  hover:shadow-sm transition-colors duration-200 cursor-pointer"/>
      </a>

    </MagneticEffect>

    <MagneticEffect>
      <a href="https://github.com/Abdellah-Idrissi" target="_blank">
        <FaGithub className="w-[18px] c2 h-[18px] md:w-[19px] md:h-[19px] xl:w-[20px] xl:h-[20px] transition-colors hover:text-white hover:shadow-xl bg-transparent hover:bg-main rounded-full hover:border-main border border-transparent  duration-200 cursor-pointer" />
      </a>
    </MagneticEffect>

    <MagneticEffect>
      <a href="https://bento.me/abdellahmoumenelidrissi" target="_blank">
        <SiBento className="w-[16.5px] c2 h-[16.5px] md:w-[17.5px] md:h-[17.5px] xl:w-[18.5px] xl:h-[18.5px] hover:text-[#7289da] hover:shadow-sm transition-colors duration-200 cursor-pointer"/>
      </a>
    </MagneticEffect>
  </div>
  )
}
