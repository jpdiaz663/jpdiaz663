import { useEffect, useState, useCallback, useRef } from "react";
// PropTypes library for runtime type checking
import PropTypes from "prop-types";
import startupSound from "../assets/windows-7-startup.mp3";

const EXIT_DELAY_MS = 450;
const EXIT_DURATION_MS = 2000;

let startupPlayback;

const playStartupSound = () => {
  if (!startupPlayback) {
    startupPlayback = new Audio(startupSound);
    startupPlayback.preload = "auto";
    startupPlayback.volume = 0.8;
  }

  startupPlayback.currentTime = 0;
  startupPlayback.play().catch(() => {});
};

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [textSummary, setTextSummary] = useState("");
  const [exiting, setExiting] = useState(false);
  const finishedRef = useRef(false);
  const fullText = "<Hello World />";
  const hour = new Date().getHours();

  const finish = useCallback(() => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    onComplete();
  }, [onComplete]);

  const summaryHandle = useCallback(() => {
    const summaries = [
      {text: "Buenas noches 🌚", from: 19, to: 24},
      {text: "Buenas tardes 🌞", from: 12, to: 18},
      {text: "Buenos días 🌞", from: 0, to: 11},
    ]
    
    const targetHour = summaries.find(summary => hour >= summary.from && hour <= summary.to)?.text;
    setTextSummary(targetHour);
  }, [hour]);

 
  useEffect(() => {
    summaryHandle();
  }, []);

  useEffect(() => {
    if (!startupPlayback) {
      startupPlayback = new Audio(startupSound);
      startupPlayback.preload = "auto";
      startupPlayback.volume = 0.8;
    }

    let index = 0;
    const timeouts = [];
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        const exitTimer = setTimeout(() => {
          playStartupSound();
          setExiting(true);
          timeouts.push(setTimeout(finish, EXIT_DURATION_MS));
        }, EXIT_DELAY_MS);

        timeouts.push(exitTimer);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      timeouts.forEach(clearTimeout);
    };
  }, [finish]);

  const handleTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== "opacity" || !exiting) {
      return;
    }
    finish();
  };

  return (
    <div
      className={`loading-screen fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center ${
        exiting ? "loading-screen--exit" : ""
      }`}
      aria-hidden={exiting}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="mb-4 text-4xl">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-orange-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
      <div className="mt-8 text-gray-400 text-2xl">{textSummary}</div>
    </div>
  );
};

// PropTypes validation for LoadingScreen component
LoadingScreen.propTypes = {
    onComplete: PropTypes.func.isRequired
};
