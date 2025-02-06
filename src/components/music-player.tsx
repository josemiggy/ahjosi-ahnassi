"use client";

import { useRef, useState } from "react";
import sigma from "../assets/sigma.mp4";
import catto from "../assets/catto.mp4";

const MusicPlayer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentVideo, setCurrentVideo] = useState(sigma); // Track the current video

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const switchToPrevious = () => {
    // Switch to the previous video (if you have more videos, you can expand this logic)
    setCurrentVideo(sigma); // You can add more videos and logic to cycle through them
  };

  const switchToNext = () => {
    // Switch to the next video
    setCurrentVideo(catto); // Change to the next video
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-80 border border-gray-100 transition-all duration-300">
      <video
        ref={videoRef}
        src={currentVideo} // Dynamically change video source based on state
        className="w-full mb-4 rounded-lg shadow-lg shadow-teal-50 border"
        loop
        autoPlay
      />
      {currentVideo === sigma ? (
        <>
          <h2 className="text-xl font-semibold text-center">
            GIGA CHAD SIGMA BALLS
          </h2>
          <p className="text-gray-600 text-sm text-center">Justin Miggers</p>
        </>
      ) : (
        <>
          <h2 className="text-xl font-semibold text-center">OIAOAIAA</h2>
          <p className="text-gray-600 text-sm text-center">Ethel the cat</p>
        </>
      )}
      <div className="mt-6 flex justify-center items-center">
        {/* Previous Button */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
          onClick={switchToPrevious}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
          >
            <path
              d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
              fill="#000000"
            ></path>
          </svg>
        </button>

        {/* Play/Pause Button */}
        <button
          className="w-12 h-12 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none mx-4 flex items-center justify-center"
          onClick={togglePlayPause}
        >
          {isPlaying ? (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                fill="#000000"
              ></path>
              <path
                d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                fill="#000000"
              ></path>
            </svg>
          ) : (
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              className="w-4 h-4 text-gray-600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
                fill="#000000"
              ></path>
            </svg>
          )}
        </button>

        {/* Next Button */}
        <button
          className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none flex items-center justify-center"
          onClick={switchToNext}
        >
          <svg
            width="64px"
            height="64px"
            viewBox="0 0 24 24"
            className="w-4 h-4 text-gray-600"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.6598 14.6474C18.4467 13.4935 18.4467 10.5065 16.6598 9.35258L5.87083 2.38548C4.13419 1.26402 2 2.72368 2 5.0329V18.9671C2 21.2763 4.13419 22.736 5.87083 21.6145L16.6598 14.6474Z"
              fill="#000000"
            ></path>
          </svg>
        </button>
      </div>
      <div className="mt-6 bg-gray-200 h-2 rounded-full">
        <div className="bg-gray-400 h-2 rounded-full w-[95%]"></div>
      </div>
      <div className="flex justify-between mt-2 text-sm text-gray-600">
        <span>1:55</span>
        <span>2:00</span>
      </div>
    </div>
  );
};

export default MusicPlayer;
