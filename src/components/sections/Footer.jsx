"use client"

import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticEffect from "../animated/MagneticEffect";
import Reveal from "../animated/Reveal";

export default function Footer() {

  
  return (
    <footer 
      className=" text-white ftr bg-main"
      id="contact"
    >
      <div className="section_footer">
        <div className="flex flex-col gap-y-5 m6:gap-y-6 md:gap-y-7 m8:gap-y-[30px] ">

          <Reveal>
            <p className="font-clash font-medium  footerTitle  ">INTERESETED IN WORKING TOGETHER ?</p>
          </Reveal>


          <Reveal>
            <p  className="footerDisc opacity-95 text">I&apos;m open to <span className="font-semibold">Job</span> opportunities for both remote and non-remote positions where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don&apos;t hesitate to <span className="font-semibold">contact</span> me.</p>
          </Reveal>


            <div  
              className="mt-[6px] xsm2:mt-[10px] m6:mt-[12px] m7:mt-[15px] md:mt-[14px] m8:mt-[15px] m9:mt-[16px]  flex flex-col xsm2:flex-row gap-x-5 gap-y-[17px]"
            >

          <Reveal>
              <a href="mailto:abdellahmoumenelidrissi@gmail.com" target="_blank" className="relative inline-block btn cursor-pointer px-5 pl-4 w-[217px] m9:w-[231px] h-[35px] m8:h-[40px] m9:h-[50px] bg-white text-main rounded-full border border-white group">

                  <div className="w-5 h-5 m9:w-[25px] m9:h-[25px] bg-main rounded-full absolute left-[16px] top-[7.5px] m8:top-[10px] m9:top-[12.5px] group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 transition-all duration-300 ease-in-out" />

                  <p className="m9:text-[17px] leading-none font-clash font-medium absolute left-[46px] m9:left-[51px] top-1/2 -translate-y-[46%] m9:-translate-y-[44%] w-max group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:text-white transition-all duration-300 ease-in-out">DROP ME AN EMAIL</p>

              </a>
          </Reveal>



          <Reveal>
              <a href="https://www.linkedin.com/in/abdellah-moumen-el-idrissi-8187ba2a1/" target="_blank" className="relative inline-block btn cursor-pointer px-5 pl-4 w-[237px] m9:w-[250px] h-[35px] m8:h-[40px] m9:h-[50px] bg-white text-main rounded-full border border-white group">

                <div className="w-5 h-5 m9:w-[25px] m9:h-[25px] bg-main rounded-full absolute left-[16px] top-[7.5px] m8:top-[10px] m9:top-[12.5px] group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0 transition-all duration-300 ease-in-out" />

                <p className="m9:text-[17px] leading-none font-clash font-medium absolute left-[46px] m9:left-[51px] top-1/2 -translate-y-[46%] m9:-translate-y-[44%] w-max group-hover:left-1/2 group-hover:-translate-x-1/2 group-hover:text-white transition-all duration-300 ease-in-out">MSG ME VIA LINKEDIN</p>

              </a>
          </Reveal>



            </div>




        </div>
      </div>


        <div 
          className=" border-t border-[#252525] "
        >
          <div className="footer py-5 m8:py-6 flex justify-between items-center">

            <Reveal>
              <p className=" text-[10px] text m7:text-[11px] md:text-[12px] m8:text-[12.5px]">&copy; Designed and Developed by me :)</p>
            </Reveal>

            <Reveal removeOverflow={true}>
              <div className="flex items-center gap-x-[16px] xsm:gap-x-5 m7:gap-x-6 m8:gap-x-7 xl:gap-x-[30px]">
                <MagneticEffect>
                  <a href="https://www.linkedin.com/in/abdellah-moumen-el-idrissi-8187ba2a1/" target="_blank">
                    <FaLinkedin className="c2 w-[13px] h-[13px] m7:w-[13.5px] m7:h-[13.5px] m8:w-[16px] m8:h-[16px] cursor-pointer transition-colors duration-200 hover:text-[#0077b5] "/>
                  </a>

                </MagneticEffect>

                <MagneticEffect>
                  <a href="https://github.com/Abdellah-Idrissi" target="_blank">
                    <FaGithub className="c2 w-[14px] h-[14px] m7:w-[15px] m7:h-[15px]  m8:w-[17.5px] m8:h-[17.5px] border border-transparent rounded-full transition-colors duration-200 hover:text-black hover:bg-white cursor-pointer   " />
                  </a>
                </MagneticEffect>

                <MagneticEffect>
                  <a href="https://discord.com/users/728274568204255273" target="_blank">
                    <FaDiscord className="c2 w-[15px] h-[15px] m7:w-[15px] m7:h-[15px]  m8:w-[18px] m8:h-[18px] cursor-pointer transition-colors duration-200 hover:text-[#7289da]"/>
                  </a>
                </MagneticEffect>


              </div>
            </Reveal>

          </div>
        </div>
    </footer>
  )
}
