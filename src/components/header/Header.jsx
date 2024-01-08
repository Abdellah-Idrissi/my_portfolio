"use client"

import {useState } from "react"
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavMenu } from "@/rtk/navMenuSlice";

export default function Header() {

  const dispatch = useDispatch()
  const [hidden,setHidden] = useState(false)
  const [headerScrolling,setHeaderScrolling] = useState(false)
  const {scrollY} = useScroll()
  const isLoading = useSelector(state=> state.preloader)

  useMotionValueEvent(scrollY,"change",(latestY)=> {
    const previousY = scrollY.getPrevious()

    if(latestY > previousY && latestY > 100) {
      setHidden(true)
    }

    if(previousY > latestY) {
      setHidden(false)
      setHeaderScrolling(true)
    }

    if(latestY === 0) {
      setHeaderScrolling(false)
    }
  })


  return (
      <motion.header 
        variants={{
          visible:{y:0},
          hidden:{y:"-100%"}
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{duration:0.35,ease:"easeInOut"}}
        className={cn('fixed inset-x-0 p-5 md:p-6 lg:p-8 xl:p-10 z-50 ',`${headerScrolling && 'headerScrolling py-[23px] md:py-[24px] lg:py-[28px] xl:py-[32px]  '}`)}>
        <div className="flex justify-between text-[16px] xsm:text-[17px]">
          <motion.div className="font-clash logo font-medium leading-none md:text-[17px] xl:text-[18px] c1 cursor-pointer  "       
            variants={{
              hidden:{x:-200,opacity:0},
              visible:{x:0,opacity:100}
            }}
            initial='hidden'
            animate={isLoading ? 'hidden' : 'visible'}

            transition={{duration:1,delay:0.3,type:'spring'}}

          >
            Amei.
          </motion.div>
          <motion.div 
            className="font-clash font-medium cursor-pointer leading-none md:text-[17px] xl:text-[18px] c1 " 
              onClick={()=> dispatch(toggleNavMenu())}
              variants={{
                hidden:{x:200,opacity:0},
                visible:{x:0,opacity:100}
              }}
              initial='hidden'
              animate={isLoading ? 'hidden' : 'visible'}
              transition={{duration:1,delay:0.3,type:'spring'}}
            >
              Menu
            </motion.div>
        </div>
      </motion.header>
  )
}