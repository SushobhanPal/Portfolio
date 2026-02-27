import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div 
      className="fixed inset-0 bg-[#0a0a0f] flex items-center justify-center z-50"
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.div
          className="text-6xl font-bold gradient-text mb-4"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          SP
        </motion.div>
        <motion.div
          className="flex gap-2 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Loader
