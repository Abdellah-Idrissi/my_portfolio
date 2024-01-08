/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { motion , useInView } from "framer-motion"
import { useRef } from "react"
import { useSelector } from "react-redux"

export default function Reveal({children,width='fit-content',removeOverflow,color='white'}) {

  const ref = useRef(null)
  const start = useSelector(state=> state.scroll)
  const isInView = useInView(ref,{once:start === false ? false : true})


  const onAnimationComplete = () => {
      if(removeOverflow) {
        ref.current.style.overflow = 'visible';
      }
  }
  
  return (
    <div ref={ref} style={{position:'relative' , width , overflow:'hidden'}} >
      <motion.div 
        variants={{
          hidden: {opacity:0 , y:100},
          visible: {opacity:1 , y:0},
        }}
        initial='hidden'
        animate={isInView && start ? 'visible' : 'hidden'}
        transition={{duration:0.5 , delay:0.85}}
        onAnimationComplete={onAnimationComplete}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: {right:0},
          visible: {right:'100%'}
        }}
        initial='hidden'
        animate={isInView && start ? 'visible' : 'hidden'}
        transition={{duration:0.5 , delay:0.6 , ease:'easeIn'}}
        style={{
          position:'absolute',
          top:4,
          bottom:4,
          left:0,
          right:0,
          background:color,
          zIndex:20
        }}
      >


      </motion.div>


    </div>
  )
}
