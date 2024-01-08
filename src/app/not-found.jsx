import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import gif from '../../public/404.gif'

export default function NotFound() {
  return (
    <div className='h-[100dvh] relative text-white bg-main ftr'>
      <div className='relative'>
        <Image src={gif} alt="404 gif" priority className='h-[100dvh] w-screen object-cover object-top'></Image>
        <div className='absolute inset-0 w-full h-full bg-black/80'></div>
      </div>

      <div className='absolute center z-10 flex flex-col gap-y-[30px] text-center justify-center w-[302px] -mt-3'>
        <div className='font-clash text-[140px] xsm:text-[150px] leading-none'>404</div>
        <div className='flex flex-col gap-y-[32px] -mt-[10px] pl-[20px] xsm:pl-[31px] '>

          <p className='text font-clash'>Damn there&apos;s nothing here</p>
          
          <Button className={'w-[190px] mx-auto c1 font-clash font-medium text-main '}>
            <a href="/">Go Back Home</a>
          </Button>

        </div>
      </div>
    </div>
  )
}
