import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiUsers } from 'react-icons/fi'

const Leadership = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const roles = [
    {
      title: 'Co-lead',
      organization: 'GDG-AIML (Google Development Club)',
      description: 'Leading AI/ML initiatives and organizing technical workshops'
    },
    {
      title: 'Technical Co-Head',
      organization: 'Data Science Club (GIET University)',
      description: 'Managing technical events and mentoring students in data science'
    }
  ]

  return (
    <section id="leadership" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Leadership
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <motion.div
              key={index}
              className="glass p-8 rounded-xl hover:bg-white/10 transition-all"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
            >
              <FiUsers className="text-5xl text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">{role.title}</h3>
              <p className="text-xl text-gray-300 mb-4">{role.organization}</p>
              <p className="text-gray-400">{role.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
