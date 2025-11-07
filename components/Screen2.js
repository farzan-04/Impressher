import { motion } from 'framer-motion'
export default function Screen2({ onNext }){
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-950/80 via-black to-pink-950/70 text-white p-6">
      <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="max-w-3xl w-full p-8 rounded-2xl bg-gradient-to-br from-black/60 to-gray-900/60 border border-gray-800 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/gifs/peek.gif" alt="peek" className="w-40 h-40 rounded-xl" />
          <div>
            <h1 className="text-4xl font-bold text-neon">Are you really ready to know...?</h1>
            <p className="mt-4 text-gray-300 text-lg"></p>
            <button onClick={onNext} className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full font-semibold hover:scale-105 transition">YES 💖</button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
