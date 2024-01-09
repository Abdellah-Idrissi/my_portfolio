'use client'

import { endPreloader } from "@/rtk/preloaderSlice";
import { motion } from "framer-motion"
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";



export default function Preloader() {
  const text = "Welcome."
  const [displayedText, setDisplayedText] = useState("")
  const [i, setI] = useState(0)
  const dispatch = useDispatch()
  const pathname = usePathname()


  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prevState) => prevState + text.charAt(i));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, 300);

    return () => {
      clearInterval(typingEffect);
    };
  }, [i])

  useEffect(() => {
    // force the scroll to top 0 , even in refresh , duplicate
    const scrollToTop = ()=> {
      document.documentElement.scrollTo({
        top: 0,
        behavior: 'instant'
      });
    }

    setTimeout(() => {
      scrollToTop()
    }, 2500)


    window.addEventListener('beforeunload',scrollToTop)

    window.addEventListener('',scrollToTop)

    return ()=> {
      window.removeEventListener('beforeunload',scrollToTop)
      window.removeEventListener('unload',scrollToTop)
    }

  }, []);


  if(pathname !== '/') {
    return <></>
  }


  
  return (
    <motion.div 
      variants={{
        visible:{display:'block'},
        hidden:{display:'none'}
      }}
      initial='visible'
      animate='hidden'
      transition={{delay:6.5}}
      
      onAnimationComplete={()=> {
        dispatch(endPreloader())
      }}

      className="dynamicHeight w-full  text-white fixed inset-0 z-[100] font-clash loader">

      <motion.div
        className="dynamicLoaderHeight bg-main loader"
        variants={{
          visible:{y:0},
          hidden:{y:'-150%'}
        }}
        initial='visible'
        animate='hidden'
        transition={{delay:5,duration:1.5}}
      />

      <motion.div 
        className="dynamicLoaderHeight bg-main loader"
        variants={{
          visible:{y:0},
          hidden:{y:'150%'}
        }}
        initial='visible'
        animate='hidden'
        transition={{delay:5,duration:1.5}}
      />

      <motion.div
        className="absolute center text-[60px] ssm:text-[65px] xsm:text-[70px] sm:text-[75px] m7:text-[75px] md:text-[80px] m8:text-[90px] mmd:text-[100px] lg:text-[110px] m1:text-[120px] xl:text-[135px] leading-none loader "
        variants={{
          visible:{opacity:100},
          hidden:{opacity:0}
        }}
        initial='visible'
        animate='hidden'
        transition={{delay:4.4,duration:0.5}}
      >
        {displayedText}
      </motion.div>


      
    </motion.div>
  )
}
