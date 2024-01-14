"use client";

import Image from "next/image";
import img1 from "../../../public/projects/fd1.jpg";
import img2 from "../../../public/projects/fd2.jpg";
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
  "Tremor",
  "TypeScript",
  "Firebase",
  "Shadcn",
  "Clerk",
];

export default function FreelancerDash() {
  return (
    <section className="!h-full">
      <div className="section2 !h-full ">
        <div className="flex flex-col gap-y-[40px] md:gap-y-[45px] lg:gap-y-[50px]  py-10 xsm2:py-12 md:py-14 mmd:py-16 lg:py-[70px]">

          <div className="flex flex-col gap-y-[12.5px] md:gap-y-[15.5px] lg:gap-y-[18.5px] xl:gap-y-[19.5px]">
          <Rv2 color="#111111">
            <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
              Project Description
            </div>
            </Rv2>
            <div className="text-[#474747] txt text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] leading-[1.85] lg:leading-[2.1] ">
              <Rv2 color="#111111">
              Freelancer Dash is a dynamic freelance dashboard designed for efficient task and project management for freelancers with a Kanban route that offers a seamless organization experience with drag-and-drop functionality, while the fully customizable calendar allows freelancers to create and delete events based on specific days, hours, or anytime. The Clients table facilitates CRUD operations, featuring sorting, filtering, and pagination, and the Projects section provides server-side capabilities for managing project details. The Home route showcases real-time changes through dynamic cards and charts. With a secure authentication system, freelancers can sign in for personalized access, or use the guest option to explore the platform&apos;s capabilities
              </Rv2>
            </div>
          </div>

          <div className="flex flex-col gap-y-[12px] md:gap-y-[15px] lg:gap-y-[18px] xl:gap-y-[19px]">
            <div className="font-clash text-[26px] md:text-[29px] lg:text-[32px] xl:text-[35px] font-medium leading-none">
              <Rv2 color="#111111">Technologies Used</Rv2>
            </div>
            <div className="text-[#474747] text-[14px] md:text-[15px] lg:text-[16px] xl:text-[16.5px] leading-[2.2] txt ">
              <Rv2 color="#111111" styles={'!w-full sm:!w-fit'}>
                {techs.map((tech, i) => (
                  <Fragment key={i}>
                    <span>{tech}</span>

                    {tech !== "Clerk" && (
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
                href="https://freelancer-dash.vercel.app/"
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
                href="https://github.com/Abdellah-Idrissi/freelancer-dash"
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
                      placeholder="blur"
                      alt="project pic"
                      priority
                      className="bg-[#e0e0e0e8] btn hover:scale-110 md:hover:scale-[1.15] transition-transform duration-200 w-full h-[335px] ssm:h-[350px] xsm:h-[410px] m6:h-[500px] md:h-[550px] mmd:h-[600px] lg:h-auto object-cover "
                    />
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className="overflow-hidden">
                    <Image
                      src={img2}
                      placeholder="blur"
                      alt="project pic"
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
