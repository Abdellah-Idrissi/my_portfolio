"use client"

import { useEffect, useLayoutEffect, useState } from "react"
import useMousePosition from "../hooks/useMousePosition"
import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import Image from "next/image"
import arrow from "../../../public/arrow.svg"
import { usePathname } from "next/navigation"



export default function CustomCursor() {

  const {x,y} = useMousePosition()
  const [overC1,setOverC1] = useState(false)
  const [overC2,setOverC2] = useState(false)
  const [overLink,setOverLink] = useState(false)
  const [overImg,setOverImg] = useState(false)
  const [overText,setOverText] = useState(false)
  const [overProject,setOverProject] = useState(false)
  const [overProjectText,setOverProjectText] = useState(false)
  const [overBtn,setOverBtn] = useState(false)
  const [overFooter,setOverFooter] = useState(false)
  const pathname = usePathname()

  const navMenuOpen = useSelector(state=> state.navMenu)
  const projectSheet = useSelector(state=> state.project)


  const size = overC1 || overText || overProjectText ? 40 : overC2 ? 35 : overLink ? 90 : overImg ? 100 : overProject  ? 70 : 15



  useEffect(()=> {
    const handleMouseEnter = () => setOverC1(true)
    const handleMouseLeave = () => setOverC1(false)
  
    const c1s = document.querySelectorAll('.c1')
    c1s.forEach((c1) => {
      c1?.addEventListener('mouseenter', handleMouseEnter)
      c1?.addEventListener('mouseleave', handleMouseLeave)
    })

    if(!navMenuOpen) {
      handleMouseLeave()
    }
  
    return () => {
      c1s.forEach((c1) => {
        c1?.removeEventListener('mouseenter', handleMouseEnter)
        c1?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  },[navMenuOpen,pathname])

  useEffect(() => {
    const handleMouseEnter = () => setOverC2(true)
    const handleMouseLeave = () => setOverC2(false)
  
    const c2s = document.querySelectorAll('.c2')
    c2s.forEach((c2) => {
      c2?.addEventListener('mouseenter', handleMouseEnter)
      c2?.addEventListener('mouseleave', handleMouseLeave)
    })
  
    return () => {
      c2s.forEach((c2) => {
        c2?.removeEventListener('mouseenter', handleMouseEnter)
        c2?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [navMenuOpen,pathname])

  useEffect(()=> {
    const handleMouseEnter = () => setOverLink(true)
    const handleMouseLeave = () => setOverLink(false)
  
    const navMenuLinks = document.querySelectorAll('.navMenuLink')
    navMenuLinks.forEach((navMenuLink) => {
      navMenuLink?.addEventListener('mouseenter', handleMouseEnter)
      navMenuLink?.addEventListener('mouseleave', handleMouseLeave)
    })

    
    if(!navMenuOpen) {
      handleMouseLeave()
    }


    return () => {
      navMenuLinks.forEach((navMenuLink) => {
        navMenuLink?.removeEventListener('mouseenter', handleMouseEnter)
        navMenuLink?.removeEventListener('mouseleave', handleMouseLeave)
      })

    }
  },[navMenuOpen,pathname])

  useEffect(()=> {
    const handleMouseEnter = () => setOverImg(true)
    const handleMouseLeave = () => setOverImg(false)
  
    const imgs = document.querySelectorAll('.img')
    imgs.forEach((img) => {
      img?.addEventListener('mouseenter', handleMouseEnter)
      img?.addEventListener('mouseleave', handleMouseLeave)
    })
  
    return () => {
      imgs.forEach((img) => {
        img?.removeEventListener('mouseenter', handleMouseEnter)
        img?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  },[pathname])

  useEffect(()=> {
    const handleMouseEnter = () => setOverText(true)

    const handleMouseLeave = () => setOverText(false)
  
    const texts = document.querySelectorAll('.text')
    texts.forEach((text) => {
      text?.addEventListener('mouseenter', handleMouseEnter)
      text?.addEventListener('mouseleave', handleMouseLeave)
    })
  
    return () => {
      texts.forEach((text) => {
        text?.removeEventListener('mouseenter', handleMouseEnter)
        text?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  },[pathname])

  useEffect(() => {
    const handleMouseEnter = () => setOverProjectText(true);
    const handleMouseLeave = () => setOverProjectText(false);

    if (!projectSheet) {
      return handleMouseLeave()
    }
  
    const timeoutId = setTimeout(() => {
      const projectTexts = document.querySelectorAll('.txt');  
      projectTexts.forEach((text) => {
        text?.addEventListener('mouseenter', handleMouseEnter);
        text?.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 0)
  
    return () => {
      clearTimeout(timeoutId)
      const projectTexts = document.querySelectorAll('.txt');
      projectTexts.forEach((text) => {
        text?.removeEventListener('mouseenter', handleMouseEnter);
        text?.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [projectSheet]);  
  
  useEffect(()=> {
    const handleMouseEnter = () => setOverProject(true)
    const handleMouseLeave = () => setOverProject(false)
  
    const projects = document.querySelectorAll('.project')
    projects.forEach((project) => {
      project?.addEventListener('mouseenter', handleMouseEnter)
      project?.addEventListener('mouseleave', handleMouseLeave)
    })
  
    return () => {
      projects.forEach((project) => {
        project?.removeEventListener('mouseenter', handleMouseEnter)
        project?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  },[])

  useEffect(()=> {
    const handleMouseEnter = () => setOverBtn(true)
    const handleMouseLeave = () => setOverBtn(false)
  
    const btns = document.querySelectorAll('.btn')
    btns.forEach((btn) => {
      btn?.addEventListener('mouseenter', handleMouseEnter)
      btn?.addEventListener('mouseleave', handleMouseLeave)
    })
  
    return () => {
      btns.forEach((btn) => {
        btn?.removeEventListener('mouseenter', handleMouseEnter)
        btn?.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  },[projectSheet])

  useEffect(()=> {
    const handleMouseEnter = () => setOverFooter(true)
    const handleMouseLeave = () => setOverFooter(false)
  
    const footer = document.querySelector('.ftr')
    footer?.addEventListener('mouseenter', handleMouseEnter)
    footer?.addEventListener('mouseleave', handleMouseLeave)


    return () => {
      footer?.removeEventListener('mouseenter', handleMouseEnter)
      footer?.removeEventListener('mouseleave', handleMouseLeave)
    }

  },[])







  return (
    <div className="cursor">
      <motion.div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[9999] grid place-items-center border border-main `}
        animate={{
          y:`${y - (size/2)}px`,
          x: `${x - (size/2)}px`,
          width: overC1 || overText || overProjectText ? '40px' : overC2 ? '35px' : overLink ? '90px' : overImg ? '100px' : overProject  ? '70px' : '15px',
          height: overC1 || overText || overProjectText ? '40px' : overC2 ? '35px' : overLink ? '90px' : overImg ? '100px' : overProject  ? '70px' : '15px',
          mixBlendMode: overC1 || overImg || overText || overBtn  ? 'difference' : 'normal',
        }}
        style={{
          backgroundColor: overC1 || overImg || overBtn  ? 'white' : overLink || overProject ? '#111111' : 'rgba(0, 0, 0, 0)',
          borderColor: overC1 || overImg || overText  || overBtn || overFooter ? 'white' : '#111111'
        }}
        transition={{ type: "tween", ease: "backOut", duration:0.3}}
      >
        <motion.div 
          className="hidden"
          animate={{
            display:overLink ? 'block' : 'none'
          }}
        >
          <Image src={arrow} alt="arrow" 
            className="w-[50px] h-[50px] rotate-45" 
            width={50} height={50}
          />
        </motion.div>

        <motion.div 
          className="hidden text-white"
          animate={{
            display:overProject ? 'block' : 'none'
          }}
        >
          <Image src={arrow} alt="arrow" 
            className="w-[40px] h-[40px] rotate-45" width={40} height={40}
          />
        </motion.div>

      </motion.div>
    </div>
  )
}
