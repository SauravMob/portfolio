"use client"

import Home from "./(home)/home";
import { motion } from "framer-motion"
import { useEffect, useState } from "react";

const page = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mousemove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mousemove)

    return () => {
      window.removeEventListener("mousemove", mousemove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16
    }
  }

  return (
    <main className="flex min-h-screen flex-col">
      <motion.div
        className="cursor"
        variants={variants}
        animate="default"
      />
      <Home />
    </main>
  );
}

export default page
