import { useState, useLayoutEffect } from "react";


const useMousePosition = () => {

  const [mousePosition, setMousePosition] = useState({ x: null, y: null })

  const updateMousePosition = e => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };


  useLayoutEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);

  }, [])


  return mousePosition;
}



export default useMousePosition;