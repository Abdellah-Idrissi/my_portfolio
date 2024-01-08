"use client";

import { motion } from "framer-motion";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Sheet,
  SheetContent,
} from "@/components/ui/sheet";
import { useDispatch } from "react-redux";
import { toggleProject } from "@/rtk/projectSlice";
import { Cross2Icon } from "@radix-ui/react-icons";
import FashionShop from "./FashionShop";
import FreelancerDash from "./FreelancerDash";
import ModernWorld from "./ModernWorld";
import Lenis from '@studio-freight/lenis'

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },

  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Project({ name, src, type }) {
  const [active, setActive] = useState(false);
  const projectImg = useRef(null);
  const project = useRef(null);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let xMoveContainer = gsap.quickTo(projectImg.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    let yMoveContainer = gsap.quickTo(projectImg.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });

    project.current.addEventListener("mouseenter", (e) => {
      const { pageX, pageY } = e;
      xMoveContainer(pageX);
      yMoveContainer(pageY);
    });
  }, [])

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
            className="fixed right-4 top-4 txt cursor-pointer rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100  disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800"
          >
            <Cross2Icon className="h-4 w-4" />
          </div>

        </SheetContent>
      </Sheet>

      {/* <motion.div
        variants={{
          hidden:{
            y: "-101%",
            transition: {
              duration:0.4
            }
          },
          visible:{
            y:0,
            transition: {
              duration: 0.5,
            },
          },
        }}
        initial='hidden'
        animate={open  ? 'visible' : 'hidden'}
        className="fixed top-0 left-0 h-full w-full z-[100] bg-red-500 overflow-y-scroll "
      >
          {name === 'Fashion Shop' ? <FashionShop /> : name === 'Freelancer Dash' ? <FreelancerDash /> : <ModernWorld />}
          <div
            onClick={() => {
              dispatch(toggleProject());
              setOpen(false);
            }}
            className="fixed right-4 top-4 txt cursor-pointer rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100  disabled:pointer-events-none data-[state=open]:bg-neutral-100 dark:data-[state=open]:bg-neutral-800"
          >
            <Cross2Icon className="h-4 w-4" />
          </div>
      </motion.div> */}

      <div
        ref={project} 
        onClick={handleProjectDetails}
        className={`h-[220px] cursor-pointer group hover:bg-main transition-colors duration-200 project flex items-center border-b border-[#999D9E] ${
          name === "Fashion Shop" && "border-t"
        }`}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <div className="flex flex-1 justify-between items-center px-[50px]   ">
          <div className="font-clash font-medium text-[70px] xl:text-[75px] group-hover:text-white group-hover:translate-x-[-15px] transition-transform duration-200">
            {name}
          </div>
          <p className="text-sm font-medium group-hover:text-white group-hover:translate-x-[15px] transition-transform duration-200">
            {type} Project
          </p>
        </div>

        <motion.div
          ref={projectImg}
          className="absolute z-50 pointer-events-none w-[600px] h-[350px] rounded-xl overflow-hidden  border  "
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          <Image
            src={`/projects/${src}`}
            alt={`${name} project`}
            priority
            width={3000}
            height={3000}
            sizes="100vw"
            className="w-full h-full object-cover blur-[2px]"
          />
        </motion.div>

      </div>
    </>
  )
}
