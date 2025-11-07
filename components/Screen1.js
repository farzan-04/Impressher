import { motion } from 'framer-motion'
export default function Screen1({ onNext }){
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-950/80 via-black to-pink-950/70 text-white p-6">
      <motion.div initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} transition={{duration:0.6}} className="max-w-3xl w-full p-8 rounded-2xl bg-gradient-to-br from-black/70 to-gray-900/70 border border-gray-800 shadow-2xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <img src="/gifs/gift.gif" alt="gift" className="w-40 h-40 rounded-xl" />
          <div>
            <h1 className="text-4xl font-bold text-neon">I have a little secret for you...</h1>
            <p className="mt-4 text-gray-300 text-lg">And trust me only YOU deserve this ✨</p>
            <button onClick={onNext} className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full font-semibold hover:scale-105 transition">Open it 🎁</button>
          </div>
        </div>
      </motion.div>
      {/* <div class="fixed bottom-4 right-4 text-sm text-white/40 pointer-events-none z-50" style="opacity: 1; transform: none;">@code_with_vansh</div> */}
    </div>
  )
}
