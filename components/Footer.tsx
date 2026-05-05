"use client"

import {motion} from "framer-motion"

const Footer = () => {
  return (
    <footer className="bg-text-primary text-surface py-8">
      <motion.div
        initial={{opacity: 0, y: 20}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        className="max-w-7xl mx-auto px-4 text-center"
      >
        <p>
          &copy; {new Date().getFullYear()} Denys V. Chavez Fuentes. All rights
          reserved.
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
