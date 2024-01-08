"use client"

import { toggleSound } from "@/rtk/soundSlice"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"

export default function Sound() {

  const soundOn = useSelector(state=> state.sound)
  const isLoading = useSelector(state=> state.preloader)

  const dispatch = useDispatch()

  const handleSong = ()=> {
    const songRef = document.querySelector('.audio')
    soundOn ? songRef.pause() : songRef.play()
    dispatch(toggleSound())
  }
  
  return (
    <motion.div 
      variants={{
        hidden:{x:200,opacity:0},
        visible:{x:0,opacity:100}
      }}
      initial='hidden'
      animate={isLoading ? 'hidden' : 'visible'}
      transition={{duration:1,delay:0.3,type:'spring'}}

      className="c2 absolute bottom-5 right-5 md:right-6 md:bottom-6 lg:right-8 lg:bottom-8 xl:right-10 xl:bottom-10 xl:text-[17px]  uppercase font-clash leading-none origin-bottom-right font-medium group cursor-pointer"
      style={{
        writingMode:"vertical-lr"
      }}
      onClick={handleSong}
  >
    <div className="-scale-[1]" >
      <span className="transition-all duration-200 ">Sound</span> 
        {
          <span   className="mt-[2px] inline-block font-semibold transition-all duration-200">{soundOn ? 'ON' : 'OFF'}</span>
        }
    </div>


  </motion.div>
  )
}