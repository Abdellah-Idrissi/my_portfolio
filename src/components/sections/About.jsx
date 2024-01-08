"use client"

import Image from "next/image";
import me from "../../../public/me.jpg"
import flag from "../../../public/flag.png"
import { useRef, useState } from "react";
import { RoughNotation } from "react-rough-notation";
import { useInView , motion } from "framer-motion";
import { useSelector } from "react-redux";




export default function About() {
  const [isShowMore, setIsShowMore] = useState(false)
  const start = useSelector(state=> state.scroll)


  const ref1 = useRef(null)
  const isInView1 = useInView(ref1,{once:start === false ? false : true})

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2,{once:start === false ? false : true})

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3,{once:start === false ? false : true})

  const textRef = useRef(null)
  const isTextInView = useInView(textRef,{once:start === false ? false : true})

  const imgRef = useRef(null)
  const isImgInView = useInView(imgRef,{once:start === false ? false : true})


  
  return (
    <section className="about_gradient overflow-x-hidden " id="aboutme">
      <div className="section">

        <div className="flex flex-col xsm2:flex-row gap-y-[30px] gap-x-[25px] mmd:gap-x-[40px] lg:gap-x-[45px] xl:gap-x-[58px] relative  ">

          <motion.div 
            ref={imgRef}
            variants={{
              hidden: {opacity:0 ,x:-50},
              visible: {opacity:1  , x:0},
            }}
            initial='hidden'
            animate={isImgInView && start ? 'visible' : 'hidden'}
            transition={{duration:0.6 , delay:0.5}}
            className="bg-red-500 h-[500px] xsm2:w-1/2 sm:w-[300px] md:w-1/2 md:h-auto mmd:w-[400px] lg:w-[450px] relative xsm2:sticky xsm2:top-0 xsm2:left-0 overflow-hidden  ">
              <Image src={me} alt="my picture" priority className="object-cover absolute inset-0 h-full w-full img  " />
          </motion.div>


          <motion.div 
            ref={textRef}
            variants={{
              hidden: {opacity:0 ,x:50},
              visible: {opacity:1  , x:0},
            }}
            initial='hidden'
            animate={isTextInView && start ? 'visible' : 'hidden'}
            transition={{duration:0.6 , delay:0.5}}
            className="text-[14px] flex-1 sm:text-[15px] mmd:text-[16px] lg:text-[17px] llg:text-[18px] lllg:text-[19px] xl:text-[20px] leading-normal flex flex-col gap-y-[20px] mmd:gap-y-[25px] lg:gap-y-[30px]  2xl:gap-y-[38px]  mmd:sticky top-0">

            <p className="text">
              Hi 👋🏻 I&apos;m Abdellah Moumen El Idrissi, a 20-year-old self-taught developer based in Casablanca, Morocco 
              <Image src={flag} alt="morocco flag" priority className="w-4 h-4 lg:w-[18px] lg:h-[18px] xl:w-[19px] xl:h-[19px] inline-block ml-[2px]" />
              . Choosing to be a self-taught developer was a decision driven by my belief that the main skill a developer should have is the ability to teach themselves, find solutions, and face new challenges independently. This skill separates a regular developer from a true 
              <RoughNotation  animationDelay={1000} padding={[5,0]} multiline type="circle" show={isInView1 && start} >
                <span ref={ref1} > problem solver.</span>
              </RoughNotation>
              
            </p>

            <p className="text">
              I started my journey in this field by exploring computer science to establish a solid foundation for my journey. As I later focused on becoming a   
              <RoughNotation  animationDelay={1150} color="#E4EBF3" padding={[5,0]} multiline type="highlight" show={isInView2 && start}>
                <span ref={ref2} > frontend developer 👨🏻‍💻 </span>
              </RoughNotation>
                navigating through technologies, with a particular focus on those that significantly improve efficiency and boost productivity in my workflow.
            </p>

              
            <p className="hidden md:block text">
              Currently, my primary focus lies in the 

              <RoughNotation  animationDelay={1250} padding={[5,0]} multiline type="underline" show={isInView3 && start}>
                <span ref={ref3}> ⚛️ Next.js/React stack. </span>
              </RoughNotation>
              
              This powerful combination allows me to create dynamic and performant user interfaces seamlessly.
            </p>

            <p className="hidden md:block text" >
              Outside the realm of development and learning, you&apos;ll find me engaged in one of two activities. I am either at the gym🏋🏻‍♀️, dedicated to maintaining my physical well-being, or bottom fragging in a game 🎮 , providing a balance to my life.
            </p>

            {
              isShowMore && 
              <>

                <p className="md:hidden text">
                Currently, my primary focus lies in the 

                  <RoughNotation animationDelay={300} padding={[5,0]} multiline type="underline" show={true}>
                    <span> ⚛️ Next.js/React stack. </span>
                      
                  </RoughNotation>

                  This powerful combination allows me to create dynamic and performant user interfaces seamlessly.
                </p>

                <p className="md:hidden text">
                Outside the realm of development and learning, you&apos;ll find me engaged in one of two activities. I am either at the gym🏋🏻‍♀️, dedicated to maintaining my physical well-being, or bottom fragging in a game 🎮 , providing a balance to my life.
                </p>

              </>
            }

            <p className={`text-main font-medium text-[15px] block md:hidden text`} onClick={()=> setIsShowMore(!isShowMore)}>
              {isShowMore ? 'Show Less.' : 'Read More...'}
            </p>
          </motion.div>

        </div>



      </div>
    </section>
  )
}

