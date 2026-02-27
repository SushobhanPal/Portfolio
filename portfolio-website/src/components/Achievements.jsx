import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiAward } from 'react-icons/fi'

const Achievements = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const achievements = [
    { title: 'Winner', event: 'Shrujanathon', icon: '🥇', color: 'from-yellow-500 to-orange-500' },
    { title: 'Runners-up', event: 'Hackinovation 1.0', icon: '🥈', color: 'from-gray-400 to-gray-600' },
    { title: 'Runners-up', event: 'Hackinovation 2.0', icon: '🥈', color: 'from-gray-400 to-gray-600' },
    { title: 'State Level Winner', event: 'Suravi Debate Competition', icon: '🏆', color: 'from-purple-500 to-pink-500' }
  ]

  return (
    <section id="achievements" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl text-center hover:bg-white/10 transition-all"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
            >
              <div className="text-6xl mb-4">{achievement.icon}</div>
              <div className={`text-xl font-bold mb-2 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                {achievement.title}
              </div>
              <p className="text-gray-400">{achievement.event}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
