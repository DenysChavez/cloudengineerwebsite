"use client"

import {useState} from "react"
import {Menu, X} from "lucide-react"
import {motion, AnimatePresence} from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    {name: "Home", href: "#home"},
    {name: "Projects", href: "#projects"},
    {name: "Skills", href: "#skills"},
    {name: "Certifications", href: "#certifications"},
    {name: "Resume", href: "#resume"},
    {name: "Contact", href: "#contact"},
  ]

  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-text-primary">
              Denys V. Chavez Fuentes
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-secondary hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-secondary"
            >
              {isOpen ?
                <X size={24} />
              : <Menu size={24} />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{opacity: 0, height: 0}}
              animate={{opacity: 1, height: "auto"}}
              exit={{opacity: 0, height: 0}}
              className="md:hidden overflow-hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-surface border-t border-border">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-text-secondary hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar
