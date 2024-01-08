import { toggleProject } from '@/rtk/projectSlice'
import { useInView , motion } from 'framer-motion'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sheet, SheetContent } from '../ui/sheet'
import FashionShop from './FashionShop'
import FreelancerDash from './FreelancerDash'
import ModernWorld from './ModernWorld'
import { Cross2Icon } from '@radix-ui/react-icons'

export default function ProjectMobile({name,type,src}) {
  const ref = useRef(null)
  const start = useSelector(state=> state.scroll)
  const isInView = useInView(ref,{once:start === false ? false : true})
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch()

  const handleProjectDetails = ()=> {
    dispatch(toggleProject());
    setOpen(true);
  }

  return (
    <>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side={"top"} className={"!w-full  !max-w-full overflow-y-scroll !h-full focus:outline-none bg-white "}>
          {name === 'Fashion Shop' ? <FashionShop /> : name === 'Freelancer Dash' ? <FreelancerDash /> : <ModernWorld />}

          <div
            onClick={() => {
              dispatch(toggleProject());
              setOpen(false);
            }}
            className="absolute right-4 top-4 txt cursor-pointer rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100  disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800"
          >
            <Cross2Icon className="h-4 w-4" />
          </div>

        </SheetContent>
      </Sheet>
    
      <div onClick={handleProjectDetails}>
        <motion.div 
          ref={ref}
          variants={{
            hidden: {opacity:0 , y:100},
            visible: {opacity:1 , y:0},
          }}
          initial='hidden'
          animate={isInView && start ? 'visible' : 'hidden'}
          transition={{duration:0.5 , delay:0.3}}
          key={name} className="flex flex-col gap-y-3 text-left group cursor-pointer"
          
        >
          
          <Image src={`/projects/${src}`} alt={`${name} project`} priority width={1000} height={1000}  className="w-full h-[250px] xsm:h-[280px] xsm2:h-[310px] m6:h-[340px] sm:h-[360px] m7:h-[400px] md:h-[430px] m8:h-[470px] mmd:h-[530px] m9:h-[550px] object-cover bg-[#E4EBF3]" />
          <p className="group-hover:underline font-clash font-medium text-[21px] ssm:text-[23px] xsm:text-[25px] sm:text-[28px] md:text-[30px] mmd:text-[35px]">{name}</p>
          <p className="text-[#717171] -mt-[7px] text-sm xsm:text-[14.5px] md:text-[15.5px] mmd:text-[16px]">{type} Project</p>

        </motion.div>
      </div>
    </>
  )
}
