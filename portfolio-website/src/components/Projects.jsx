import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects = [
    {
      title: 'TruthScope',
      subtitle: 'AI-based Detection of Fake Digital Content',
      description: 'Flagship project featuring multiple ML/NLP models for fake news detection, scam detection, and deepfake detection using TF-IDF vectorizer, ANN, CNN, and Computer Vision techniques.',
      tech: ['TensorFlow', 'NLP', 'CNN', 'ANN', 'Computer Vision', 'TF-IDF'],
      gradient: 'from-blue-500 to-purple-600',
      featured: true
    },
    {
      title: 'Croplysis',
      subtitle: 'Agricultural Data Analysis & Prediction',
      description: 'Comprehensive data cleaning, analysis, and visualization using Pandas, NumPy, Matplotlib, and Seaborn. Built Deep Learning and Logistic Regression models for agricultural yield improvement insights.',
      tech: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Deep Learning'],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'InsideFashion',
      subtitle: 'Fashion Size Prediction & Trend Detection',
      description: 'Team project utilizing Computer Vision, Multiple Regression, and Prophet Model for fashion size prediction and trend detection in the fashion industry.',
      tech: ['Computer Vision', 'Multiple Regression', 'Prophet Model'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'ThreatIntel',
      subtitle: 'Blockchain-based IR Sharing Platform',
      description: 'Team project featuring a blockchain-based incident response sharing platform with cybersecurity attack detection models for enhanced threat intelligence.',
      tech: ['Blockchain', 'Cybersecurity', 'ML Models'],
      gradient: 'from-red-500 to-orange-600'
    }
  ]

  return (
    <section id="projects" className="py-32 px-6 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-5xl font-bold text-center mb-20 gradient-text"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ project, index, isInView }) => {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e) => {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateXValue = (y - centerY) / 10
    const rotateYValue = (centerX - x) / 10
    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`glass p-8 rounded-xl hover:bg-white/10 transition-all ${project.featured ? 'md:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: 'transform 0.1s'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {project.featured && (
        <div className="inline-block px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold mb-4">
          ⭐ Flagship Project
        </div>
      )}
      
      <div className={`text-3xl font-bold mb-2 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
        {project.title}
      </div>
      
      <div className="text-gray-400 mb-4 font-semibold">{project.subtitle}</div>
      
      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-primary/20 rounded-full text-sm border border-primary/30"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex gap-4">
        <motion.button
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiGithub /> View Code
        </motion.button>
        <motion.button
          className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiExternalLink /> Live Demo
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Projects
