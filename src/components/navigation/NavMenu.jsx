import AnimatedMenuLink from "@/components/animated/AnimatedMenuLink";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { toggleNavMenu } from "@/rtk/navMenuSlice";
import { useEffect } from "react";
import MenuSound from "./MenuSound";
import MenuSocialIcons from "./MenuSocialIcons";
import { usePathname } from "next/navigation";

const links = [
  { title: "About me", href: "#aboutme" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const menuVariants = {
  initial: {
    y: "-100%",
  },
  animate: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    y: "-100%",
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 0.5, 0.36, 1],
    },
  },
};

const containerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

export default function NavMenu() {
  const dispatch = useDispatch();
  const navMenuOpen = useSelector((state) => state.navMenu);
  const pathname = usePathname()

  useEffect(() => {
    navMenuOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [navMenuOpen]);

  return (
    <motion.div
      variants={menuVariants}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
      className={`${pathname === '/' ? 'navmenu_gradient z-[2000]' : 'navmenu_gradient2 z-[100]'} grid place-items-center p-5 md:p-6 lg:p-8 xl:p-10  fixed top-0 left-0 dynamicHeight dynamicMaxMenuHeight inset-x-0 origin-top`}
    >
      <div
        className={`fixed  inset-x-0 p-5 md:p-6 lg:p-8 xl:p-10 z-50 transition-all duration-300 top-0 `}
      >
        <div className="flex justify-between text-[16px] xsm:text-[17px]">
          <a
            href="/#home"
            className="font-clash font-medium md:text-[17px] xl:text-[18px] c1 Menulogo"
            onClick={() => dispatch(toggleNavMenu())}
          >
            Amei.
          </a>
          <div
            className="font-clash font-medium cursor-pointer md:text-[17px] xl:text-[18px] c1"
            onClick={() => dispatch(toggleNavMenu())}
          >
            Close
          </div>
        </div>
      </div>

      <MenuSound />

      <MenuSocialIcons />

      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="open"
        exit="initial"
        className="flex flex-col gap-y-8 md:gap-y-[40px] mmd:gap-y-[50px] xl:gap-y-[60px] justify-center text-center"
      >
        {links.map(({ href, title }) => (
          <div key={href} className="overflow-hidden">
            <AnimatedMenuLink href={href} title={title} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
