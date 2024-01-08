"use client";

import { AnimatePresence } from "framer-motion";
import Header from "./Header";
import NavMenu from "../navigation/NavMenu";
import { useSelector } from "react-redux";

export default function HeaderWrapper() {
  const navMenuOpen = useSelector((state) => state.navMenu);

  return (
    <>
      <Header />

      <AnimatePresence>{navMenuOpen && <NavMenu />}</AnimatePresence>
    </>
  );
}
