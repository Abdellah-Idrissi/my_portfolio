'use client'

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Marquee from "react-fast-marquee";

const skills = [
  {name:'Html',src:'html5.svg'},
  {name:'CSS',src:'css3.svg'},
  {name:'JavaScript',src:'js.svg'},
  {name:'TypeScript',src:'ts.svg'},
  {name:'Sass',src:'sass.svg'},
  {name:'Tailwind',src:'tailwind.svg'},
  {name:'React',src:'react.svg'},
  {name:'Next.js',src:'next.svg'},
  {name:'Redux',src:'Redux.svg'},
  {name:'React Query',src:'rq.svg'},
  {name:'Firebase',src:'firebase.svg'},
  {name:'Supabase',src:'supabase.svg'},
  {name:'Sanity',src:'Sanity.svg'},
  {name:'GraphQl',src:'graphql.svg'},
  {name:'Github',src:'github.svg'},
  {name:'Git',src:'git.svg'},
  {name:'Postman',src:'postman.svg'},
  {name:'ShadCn',src:'shadcn.png'},
  {name:'Headless UI',src:'Headless UI.svg'},
  {name:'Tremor',src:'tremor.jpg'},
  {name:'Jest',src:'Jest.svg'},
  {name:'Vitest',src:'vitest.svg'},
  {name:'React Testing Library',src:'rtestinglibrary.png'},
  {name:'Figma',src:'figma.svg'},
  {name:'Framer motion',src:'framer-motion.svg'},
  {name:'Gsap',src:'gsap.svg'},
  {name:'Clerk',src:'clerk.svg'},
  {name:'NextAuth',src:'nextauth.png'},
]

export default function Skills() {
  // const ref = useRef()
  // const isInView = useInView(ref)
  
  return (
    <section className="bg-[#E4EBF3] ">

      <div className="section !pt-[30px]   ">

          <Marquee pauseOnHover speed={80}>
            <div className="flex gap-x-[30px]">
              {skills.map(({name,src})=> (
                <div key={name} className={`border border-neutral-500 bg-neutral-800 font-medium rounded p-1 px-[5px] text-sm inline-flex items-center leading-4 text-neutral-100 no-underline ${name === 'Html' && 'ml-[30px]'}`}>
                  <Image alt={`${name} Logo`} src={`/tech_logos/${src}`} sizes="100px" loading='eager' className="!mr-1 w-[14px] h-[14px]" width="14" height="14"  />
                  {name}
                </div>
              ))}
            </div>
          </Marquee>
        

      </div>

    </section>
  )
}
