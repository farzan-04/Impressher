// components/Intro.js
import { useEffect, useState } from "react";

export default function Intro() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // 2.5s intro
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black text-white text-3xl font-bold transition-opacity duration-1000 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <span className="animate-pulse">✨ ImpressHer ✨</span>
    </div>
  );
}
