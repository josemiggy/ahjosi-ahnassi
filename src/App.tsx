"use client";
import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import catImage from "./assets/cat.png";
import MusicPlayer from "./components/music-player";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleYesClick = () => {
    setYesPressed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate rice cake on top",
      "What about a matcha frostie",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to miggy's ghost",
      "please bb nassyy",
      ":(((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-100">
      {yesPressed ? (
        <>
          {showConfetti && (
            <Confetti width={windowSize.width} height={windowSize.height} />
          )}
          <div className="flex flex-col items-center justify-center gap-5">
            <MusicPlayer />
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-3xl font-bold text-center">
            Nassy, my habibi. Will you be my valentine?🌹
          </h1>
          <img className="h-[320px] rounded-lg" src={catImage} alt="El Gato" />
          <div className="flex items-center gap-2 w-full justify-center">
            <button
              className={`rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all duration-300`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all duration-300"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
