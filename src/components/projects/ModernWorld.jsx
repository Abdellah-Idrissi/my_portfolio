"use client";

import Image from "next/image";
import img1 from "../../../public/projects/md1.jpg";
import img2 from "../../../public/projects/md2.jpg";
import { Fragment } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Rv2 from "../animated/Rv2";

const techs = [
  "Next.js",
  "React",
  "Tailwind",
  "TypeScript",
  "Framer Motion",
];

export default function ModernWorld() {
  return (
    <section className="!h-full">
      <div className="section2 grid place-items-center  !h-full ">
        <div className="flex flex-col gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px]  py-10 xsm2:py-12 md:py-14 mmd:py-16 lg:py-[70px]   ">

          <div className="flex flex-col gap-y-[12.5px] md:gap-y-[15.5px] lg:gap-y-[18.5px] xl:gap-y-[19.5px]">
            <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
              <Rv2 color="#111111">Project Description</Rv2>
            </div>
            <div className="text-[#474747] txt text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] leading-[1.85] lg:leading-[2.1] ">
              <Rv2 color="#111111">
              Modern World is a visually stunning landing page featuring contemporary buildings and architectures. With a sleek modern UI, swipers, and animations, it delivers a seamless and engaging exploration of modern design excellence
              </Rv2>
            </div>
          </div>

          <div className="flex flex-col gap-y-[12px] md:gap-y-[15px] lg:gap-y-[18px] xl:gap-y-[19px]">
            <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
              <Rv2 color="#111111">Technologies Used</Rv2>
            </div>
            <div className="text-[#474747] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] leading-[2.2] txt  ">
              <Rv2 color="#111111" styles={'!w-full sm:!w-fit'}>
                {techs.map((tech, i) => (
                  <Fragment key={i}>
                    <span>{tech}</span>

                    {tech !== "Framer Motion" && (
                      <span className={`px-[10px] break-all`}>/</span>
                    )}
                  </Fragment>
                ))}
              </Rv2>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-[60px] xsm:w-[400px] sm:w-[410px] md:w-[490px] xl:w-[510px] xsm:justify-between gap-y-9">
            <div className="flex flex-col gap-y-[12px] md:gap-y-[16px] lg:gap-y-[19px] xl:gap-y-[20px]">
              <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
                <Rv2 color="#111111">Platform</Rv2>
              </div>
              <div className="text-[#474747] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] txt">
                <Rv2 color="#111111">Web & Mobile</Rv2>
              </div>
            </div>

            <div className="flex flex-col gap-y-[12px] md:gap-y-[16px] lg:gap-y-[19px] xl:gap-y-[20px]">
              <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
                <Rv2 color="#111111">Role</Rv2>
              </div>
              <div className="text-[#474747] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] txt">
                <Rv2 color="#111111">Design & Developement</Rv2>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-x-5 xsm:gap-x-7 xsm:w-[435px] sm:w-[445.5px] md:w-[528px] lg:w-[540px] xl:w-[573px] xsm:justify-between  gap-y-9  ">
            <Rv2 color="#111111">
              <a
                href="https://modernworld.vercel.app/"
                target="_blank"
                className="cta  flex items-center gap-x-[3px] lg:gap-x-[5px] w-fit"
              >
                <span className="font-clash font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  Live Demo
                </span>
                <div className="svg">
                  <Image
                    src={"/arrw.svg"}
                    width={50}
                    height={50}
                    alt=""
                    className="w-[18px] h-[18px] mt-[1px] lg:mt-[2px]  rotate-90"
                  ></Image>
                </div>
              </a>
            </Rv2>

            <Rv2 color="#111111">
              <a
                href="https://github.com/Abdellah-Idrissi/modern_world"
                target="_blank"
                className="cta flex items-center gap-x-[3px] lg:gap-x-[5px] w-fit"
              >
                <span className="font-clash font-semibold text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px]">
                  Source Code
                </span>
                <div className="svg">
                  <Image
                    src={"/arrw.svg"}
                    width={50}
                    height={50}
                    alt=""
                    className="w-[18px] h-[18px] mt-[1px] lg:mt-[2px]  rotate-90"
                  ></Image>
                </div>
              </a>
            </Rv2>
          </div>

          <Rv2 color="#111111">
            <Carousel className={"relative "}>
              <CarouselContent>
                <CarouselItem>
                  <div className="overflow-hidden">
                    <Image
                      src={img1}
                      alt="project pic"
                      placeholder="blur"
                      priority
                      className="bg-[#e0e0e0e8] btn hover:scale-110 md:hover:scale-[1.15] transition-transform duration-200 w-full h-[335px] ssm:h-[350px] xsm:h-[410px] m6:h-[500px] md:h-[550px] mmd:h-[600px] lg:h-auto object-cover "
                    />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="overflow-hidden">
                    <Image
                      src={img2}
                      alt="project pic"
                      placeholder="blur"
                      priority
                      className="bg-[#e0e0e0e8] btn hover:scale-110 md:hover:scale-[1.15] transition-transform duration-200 w-full h-[335px] ssm:h-[350px] xsm:h-[410px] m6:h-[500px] md:h-[550px] mmd:h-[600px] lg:h-auto object-cover "
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>

              <div className="flex gap-x-3 md:gap-x-5 justify-center absolute bottom-0 left-1/2 -translate-x-1/2 mb-[15px] md:mb-5 ">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </Rv2>

        </div>
      </div>
    </section>
  );
}
