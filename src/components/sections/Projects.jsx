"use client"

import Project from "../projects/Project"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import ProjectMobile from "../projects/ProjectMobile"
import { useSelector } from "react-redux"


const projects = [
  {name:'Fashion Shop',type:'Fullstack',src:'p1.jpg',href:'fashionshop'},
  {name:'Freelancer Dash',type:'Fullstack',src:'p2.jpg',href:'freelancerdash'},
  {name:'Modern World',type:'Frontend',src:'p3.jpg',href:'modernworld'}
]

export default function Projects() {

  const ref = useRef(null)
  const start = useSelector(state=> state.scroll)
  const isInView = useInView(ref,{once:start === false ? false : true})


  return (
    <section id="projects">
      <div className="section lg:!py-[130px] ">

        <div className="flex flex-col gap-y-10 md:gap-y-11 mmd:gap-y-12 lg:hidden">
          {projects.map(({name,type,src,href})=> (
            <ProjectMobile key={name} name={name} type={type} src={src} href={href} />
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={{
            hidden: {opacity:0 , y:100},
            visible: {opacity:1 , y:0},
          }}
          initial='hidden'
          animate={isInView && start ? 'visible' : 'hidden'}
          transition={{duration:0.5 , delay:0.5}}
          className="hidden lg:block"
        >
          {
            projects.map(({name,src,type,href})=>  <Project key={name} name={name} src={src} type={type} href={href} /> )
          }
        </motion.div>

      </div>
    </section>
  )
}