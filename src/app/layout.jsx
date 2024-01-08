import localFont from "next/font/local";
import CustomCursor from "@/components/animated/CustomCursor";
import { RtkProvider } from "@/rtk/RtkProvider";
import Preloader from "@/components/animated/Preloader";
import ScrollBar from "@/components/features/ScrollBar";
import StopScroll from "@/components/features/StopScroll";
import SmoothScroll from "@/components/features/SmoothScroll";
import Image from "next/image";
import img from '../../public/projects/fs1.jpg'
import img2 from '../../public/projects/fs2.jpg'
import img3 from '../../public/projects/fd1.jpg'
import img4 from '../../public/projects/fd2.jpg'
import img5 from '../../public/projects/md1.jpg'
import img6 from '../../public/projects/md2.jpg'
import favicon from "../../public/favicon.ico"
import "./globals.css";


const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/ClashDisplay-Extralight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--clashDisplay",
})

const generalSans = localFont({
  src: [
    {
      path: "../fonts/GeneralSans-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/GeneralSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],

  variable: "--generalSans",
})

export const metadata = {
  title: "Abdellah Moumen El Idrissi - Frontend Developer",
  description: "Hi I'm Abdellah welcome to my portfolio! I'm a frontend developer with a particular focus on the Next.js/React stack",
  icons: [{ rel: 'icon', url: favicon.src }],
}



export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${generalSans.variable} `}>
      <body className={`${generalSans.className} text-main overflow-x-hidden relative overflow-y-hidden  `} suppressHydrationWarning >
        <RtkProvider>
          
          <Image src={img} alt="" loading="eager" priority className="hidden "></Image>
          <Image src={img2} alt="" loading="eager" priority className="hidden "></Image>
          <Image src={img3} alt="" loading="eager" priority className="hidden "></Image>
          <Image src={img4} alt="" loading="eager" priority className="hidden "></Image>
          <Image src={img5} alt="" loading="eager" priority  className="hidden "></Image>
          <Image src={img6} alt="" loading="eager" priority className="hidden "></Image>

          <ScrollBar />

          {children}

          <audio className="audio" loop>
            <source src="/sounds/happy place - swiftly.mp3" type="audio/mp3" />
            Your browser does not support the audio tag.
          </audio>

          <Preloader />

          <CustomCursor />

          <StopScroll />

          <SmoothScroll />

        </RtkProvider>
      </body>
    </html>
  );
}
