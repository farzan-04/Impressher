
// import { useEffect, useState } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'

// // YouTube video ID and start/end seconds
// const VIDEO_ID = 'IltsOcCj1Ak'
// const START = 65 // 1:05
// const END = 77   // 1:17

// const LYRICS = [
//   'Tu haseen tera naam haseen ae',
//   'Tere ishq da jaam haseen ae',
//   'Eh bematlabi zindagi',
//   'Jado di tere naam haseen ae'
// ]

// export default function Screen3({ onDone }){
//   const [index, setIndex] = useState(-1)

//   useEffect(()=>{
//     // animate lyrics line by line
//     setIndex(-1)
//     const timeouts = []
//     LYRICS.forEach((_, i)=>{
//       timeouts.push(setTimeout(()=> setIndex(i), 1200 + i*3000))
//     })
//     // after total duration (~END-START seconds) call onDone
//     const total = (END - START) * 1000 + 600
//     const finish = setTimeout(()=> onDone(), total)
//     return ()=>{
//       timeouts.forEach(clearTimeout)
//       clearTimeout(finish)
//     }
//   },[onDone])

//   const src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&controls=0&start=${START}&end=${END}&rel=0&modestbranding=1&playsinline=1`;

//   return (
//     <div className="w-full min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-pink-50 to-purple-200">
//       <div className="max-w-3xl w-full p-8 rounded-3xl bg-white/60 backdrop-blur-sm shadow-2xl text-center">
//         <h2 className="text-2xl font-semibold mb-6">Listen...</h2>
//         <div className="relative">
//           <div className="aspect-video rounded-xl overflow-hidden shadow-inner">
//             <iframe src={src} title="song" width="100%" height="100%" allow="autoplay; encrypted-media" style={{border:0}} />
//           </div>
//           <div className="mt-6 space-y-4">
//             {LYRICS.map((line, i)=> (
//               <AnimatePresence key={i}>
//                 {i === index && (
//                   <motion.p initial={{opacity:0, scale:0.6}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.6}} transition={{duration:0.6}} className="text-2xl font-semibold text-pink-700">
//                     {line}
//                   </motion.p>
//                 )}
//               </AnimatePresence>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

"use client";
import { useEffect, useState } from "react";

export default function Screen3({ onFinish }) {
  const lyrics = [
    "Tu haseen tera naam haseen ae 💖",
    "Tere ishq da jaam haseen ae 💫",
    "Eh bematlabi zindagi 🌙",
    "Jado di tere naam haseen ae 💕",
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = new Audio("/song.mp3");
    const lineDelay = 2500; // ms between each lyric
    const lyricTimers = [];
    let finishTimer;

    // When the file can play fully, start animation + audio
    audio.addEventListener("canplaythrough", () => {
      setStarted(true);
      audio.play();

      // schedule lyric changes
      lyrics.forEach((_, i) => {
        lyricTimers.push(
          setTimeout(() => {
            setCurrentLine(i);
          }, i * lineDelay)
        );
      });

      // once actual audio finishes, trigger next screen
      audio.addEventListener("ended", () => {
        clearTimeout(finishTimer);
        onFinish?.();
      });

      // backup timer in case 'ended' isn't fired (safety net)
      finishTimer = setTimeout(() => {
        onFinish?.();
      }, audio.duration * 1000 + 500);
    });

    // start loading
    audio.load();

    return () => {
      audio.pause();
      audio.currentTime = 0;
      lyricTimers.forEach(clearTimeout);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #ff7eb3, #8e44ad)",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "white",
        fontSize: "clamp(1.3rem, 4vw, 2rem)",
        fontWeight: "bold",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {started && (
        <div
          key={currentLine}
          style={{
            opacity: 0,
            animation: "fadeIn 1s forwards",
          }}
        >
          {lyrics[currentLine]}
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
