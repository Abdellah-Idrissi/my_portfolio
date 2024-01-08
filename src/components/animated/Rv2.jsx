/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { motion , useInView } from "framer-motion"
import { useRef } from "react"

export default function Rv2({children,width='fit-content',removeOverflow,color='white',styles}) {

  const ref = useRef(null)

  const onAnimationComplete = () => {
      if(removeOverflow) {
        ref.current.style.overflow = 'visible';
      }
  }
  
  
  return (
    <div ref={ref} style={{position:'relative' , width , overflow:'hidden'}} className={`${styles}`}>
      <motion.div 
        variants={{
          hidden: {opacity:0 , y:100},
          visible: {opacity:1 , y:0},
        }}
        initial='hidden'
        animate={'visible'}
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
        animate={'visible'}
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
