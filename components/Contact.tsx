"use client"

import {useState} from "react"
import {motion} from "framer-motion"
import {Mail, Code, User, Send} from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    alert("Message sent! (This is a demo - no backend integrated)")
    setFormData({name: "", email: "", message: ""})
  }

  return (
    <section id="contact" className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
          className="text-3xl font-bold text-center mb-12 text-text-primary"
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{opacity: 0, x: -20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.2}}
          >
            <h3 className="text-xl font-semibold mb-4 text-text-primary">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Mail size={20} /> your.email@example.com
              </a>
              <a
                href="https://github.com/yourusername"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <Code size={20} /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                className="flex items-center gap-2 text-text-secondary hover:text-primary transition-colors"
              >
                <User size={20} /> LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{opacity: 0, x: 20}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5, delay: 0.4}}
            className="bg-surface rounded-lg shadow-md p-6 border border-border"
          >
            <div className="mb-4">
              <label className="block text-text-primary mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({...formData, name: e.target.value})
                }
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary-hover bg-background text-text-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-text-primary mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({...formData, email: e.target.value})
                }
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary-hover bg-background text-text-primary"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-text-primary mb-2 font-medium">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({...formData, message: e.target.value})
                }
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary-hover bg-background text-text-primary"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-surface px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors flex items-center justify-center gap-2 font-medium"
            >
              <Send size={20} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
