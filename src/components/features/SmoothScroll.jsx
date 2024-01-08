"use client"

import Lenis from '@studio-freight/lenis';
import { usePathname, useRouter } from 'next/navigation';
import React, { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';




export default function SmoothScroll() {
  const navMenuOpen = useSelector((state) => state.navMenu)
  const lenisInstanceRef = useRef(null)
  const rafRef = useRef(null)
  const startScroll = useSelector(state=> state.scroll)
  const project = useSelector(state=> state.project)


  const pathname = usePathname()
  const router = useRouter()


  useLayoutEffect(() => {

    const handleLogoClick = (e) => {

      e.preventDefault();

      lenisInstanceRef.current.scrollTo(0, {
        duration: 1.2,
        easing: (t) => Math.sin((t * Math.PI) / 2),
      });

    }

    const handleMenuLogoClick = (e) => {

      e.preventDefault();

        window.scrollTo({top:0,behavior:'instant'})

    }

    if(startScroll) {
  
      if (!lenisInstanceRef.current) {
        lenisInstanceRef.current = new Lenis()

        document.querySelector('.logo')?.addEventListener('click',handleLogoClick)
        document.querySelector('.Menulogo')?.addEventListener('click',handleMenuLogoClick)

  
        function raf(time) {
          lenisInstanceRef.current.raf(time)
          rafRef.current = requestAnimationFrame(raf)
        }

        raf()
      }

      if (navMenuOpen && lenisInstanceRef.current) {
        cancelAnimationFrame(rafRef.current)
        lenisInstanceRef.current.destroy()
        lenisInstanceRef.current = null
      }

      if (project && lenisInstanceRef.current) {
        cancelAnimationFrame(rafRef.current)
        lenisInstanceRef.current.destroy()
        lenisInstanceRef.current = null
      }
    }



    return () => {
      if (lenisInstanceRef.current) {
        document.querySelector('.logo')?.removeEventListener('click', handleLogoClick);
        document.querySelector('.Menulogo')?.removeEventListener('click',handleMenuLogoClick)

        cancelAnimationFrame(rafRef.current);
        lenisInstanceRef.current.destroy();
        lenisInstanceRef.current = null;
      }
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navMenuOpen,startScroll,pathname,project]);





  return <></>
}

