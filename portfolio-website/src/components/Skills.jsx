import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiPython, SiTensorflow, SiScikitlearn, SiJupyter, SiGit, SiGithub, SiVisualstudiocode } from 'react-icons/si'
import { FaBrain, FaChartBar, FaUsers, FaCode } from 'react-icons/fa'

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skillCategories = [
    {
      title: 'Languages & Fundamentals',
      icon: <FaCode />,
      skills: ['Java', 'Python', 'C', 'DSA (Java - NPTEL)']
    },
    {
      title: 'AI/ML',
      icon: <FaBrain />,
      skills: ['Machine Learning', 'CNN', 'ANN', 'NLP (Text Classification)']
    },
    {
      title: 'Data Science',
      icon: <FaChartBar />,
      skills: ['Data Cleaning', 'Preprocessing', 'Visualization', 'Power BI']
    },
    {
      title: 'Frameworks',
      icon: <SiTensorflow />,
      skills: ['TensorFlow', 'Keras', 'Scikit-learn']
    },
    {
      title: 'Tools',
      icon: <SiGit />,
      skills: ['Git', 'GitHub', 'Jupyter', 'VS Code']
    },
    {
      title: 'Soft Skills',
      icon: <FaUsers />,
      skills: ['Public Speaking', 'Presentation', 'Team Collaboration']
    }
  ]

  return (
    <section id="skills" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass p-6 rounded-xl hover:bg-white/10 transition-all group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
            >
              <div className="text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30 hover:bg-primary/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center gap-8 flex-wrap"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          {[SiPython, SiTensorflow, SiScikitlearn, SiJupyter, SiGit, SiGithub, SiVisualstudiocode].map((Icon, i) => (
            <motion.div
              key={i}
              className="text-5xl text-gray-400 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
