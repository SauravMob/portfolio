"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import _ from 'lodash'
import Home from './(home)/home'
import About from './(home)/about'

const Page = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const throttledMouseMove = _.throttle((e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }, 16)

    window.addEventListener('mousemove', throttledMouseMove)

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 200,
      y: mousePosition.y - 200,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ['20%', '20%', '50%', '50%', '20%'],
    },
  }

  const style = {
    transform: 'translate(-50%, -50%)',
    width: '400px',
    height: '400px',
    borderRadius: '50% 22% 40% 80%',
    filter: 'blur(100px)',
    background: 'linear-gradient(#43d9ad, #4d5bce)',
    opacity: 0.4,
    zIndex: -1,
  }

  return (
    <main className="flex min-h-screen flex-col">
      <motion.div
        className="fixed top-0 left-0"
        style={style}
        variants={variants}
        animate="default"
        transition={{
          x: {
            duration: 0.1,
            ease: 'linear',
          },
          y: {
            duration: 0.1,
            ease: 'linear',
          },
          default: {
            duration: 2.5,
            repeat: Infinity,
          },
        }}
      ></motion.div>
      <Home />
      <motion.div
        transition={{ duration: 0.5 }}
        initial={{ opacity: 0, scale: 0.5, x: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        <About />
      </motion.div>
    </main>
  )
}

export default Page
