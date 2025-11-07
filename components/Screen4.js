import { motion } from 'framer-motion'
export default function Screen4(){
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-100 via-purple-200 to-purple-300">
      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="max-w-3xl w-full p-8 rounded-3xl bg-white/80 shadow-2xl text-center">
        <img src="/gifs/flower.gif" alt="flower" className="mx-auto w-48 h-48" />
        <h1 className="text-3xl font-semibold mt-6">For my Haseen Girl 😍</h1>
        <p className="mt-4 text-gray-700">Made with ❤️ by Farzan</p>
      </motion.div>
    </div>
  )
}
