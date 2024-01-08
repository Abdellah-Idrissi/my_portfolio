import Link from "next/link";
import {motion} from "framer-motion"
import { useDispatch } from "react-redux";
import { toggleNavMenu } from "@/rtk/navMenuSlice";


const linkVariants = {
  initial:{
    y:"30vh",
    transition:{
      duration:0.5,
      ease:[0.37,0,0.63,1]
    }
  },
  open:{
    y:0,
    transition:{
      duration:0.7,
      ease:[0,0.55,0.45,1]
    }
  }
}

export default function AnimatedMenuLink({title,href}) {
  const dispatch = useDispatch()


  return (
    <motion.div variants={linkVariants} onClick={() => dispatch(toggleNavMenu())} className="font-clash text-[40px] ssm:text-[43px] xsm:text-[47px] sm:text-[65px] md:text-[70px] mmd:text-[80px] lg:text-[85px] xl:text-[90px] font-medium">
      <Link href={`/${href}`} className="navMenuLink transition-colors duration-200">{title}</Link>
    </motion.div>
  )
}
