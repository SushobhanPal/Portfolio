import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiMail, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    { icon: FiMail, text: '24cseaiml022.sushobhanpal@giet.edu', link: 'mailto:24cseaiml022.sushobhanpal@giet.edu' },
    { icon: FiPhone, text: '+91 9861524645', link: 'tel:+919861524645' },
    { icon: FiGithub, text: 'github.com/SushobhanPal', link: 'https://github.com/SushobhanPal' },
    { icon: FiLinkedin, text: 'LinkedIn Profile', link: 'https://www.linkedin.com/in/sushobhan-pal-970a35317/' }
  ]

  return (
    <section id="contact" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let's Build Something Intelligent
        </motion.h2>

        <motion.p
          className="text-xl text-gray-400 mb-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Open to collaborations, research opportunities, and innovative projects
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <info.icon className="text-3xl text-primary" />
              <span className="text-gray-300">{info.text}</span>
            </motion.a>
          ))}
        </div>

        <motion.footer
          className="text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p>© 2024 Sushobhan Pal. Built with React & Tailwind CSS</p>
          <p className="mt-2">Designed & Developed with precision</p>
        </motion.footer>
      </div>
    </section>
  )
}

export default Contact
