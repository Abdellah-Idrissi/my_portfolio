'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef } from 'react'

export default function ScrollBar() {
  const progressRef = useRef()
  const pathname = usePathname()


  useEffect(()=> {
    document.addEventListener('scroll',()=> {
      const {scrollTop,scrollHeight} = document.documentElement
      const percent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`

      progressRef.current.style.width = percent
    })
  },[])

  
  useEffect(()=> {
    if(pathname === '/fashionshop' || pathname === 'freelancerdash' || pathname === 'modernworld') {
      progressRef.current.style.width = 0
    }
  },[pathname])

  return  <div ref={progressRef} className="fixed top-0 z-[100] bg-main h-[3px] md:h-1 left-0"></div>
}
