import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward } from 'react-icons/fi'

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const education = [
    {
      degree: 'B.Tech in CSE (AI & ML)',
      institution: 'GIET University, Odisha',
      score: 'CGPA: 9.56',
      period: '2024 - Present'
    },
    {
      degree: 'Class XII (CHSE)',
      institution: 'Sulagna HS School',
      score: 'Score: 91.5%',
      period: '2022 - 2024'
    }
  ]

  return (
    <section id="education" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary to-secondary" />
          
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                <div className="glass p-6 rounded-xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-2 mb-2 justify-end">
                    <FiAward className="text-primary" />
                    <span className="text-sm text-gray-400">{edu.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-gray-300 mb-2">{edu.institution}</p>
                  <p className="text-primary font-semibold">{edu.score}</p>
                </div>
              </div>
              
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-[#0a0a0f] z-10" />
              </div>
              
              <div className="w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
