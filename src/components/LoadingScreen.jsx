import { useEffect, useState, useCallback } from "react";
// PropTypes library for runtime type checking
import PropTypes from "prop-types";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [textSummary, setTextSummary] = useState("");
  const fullText = "<Hello World />";
  const hour = new Date().getHours();

  const summaryHandle = useCallback(() => {
    if(hour > 18) {
      setTextSummary('Buenas noches' + "🌚");
    } else if(hour > 12) {
      setTextSummary('Buenos días' + "🌞");
    }else{
      setTextSummary('Buenas tardes' + "🌞");
    }
  }, [hour]);
 
  useEffect(() => {
    summaryHandle();
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        

        setTimeout(() => {
          onComplete();
        }, 500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="mb-4 text-4xl font-mono font-bold">
        {text} <span className="animate-blink ml-1"> | </span>
      </div>
      
      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
      <div className="mt-8 text-gray-400 text-2xl font-regular font-bold">{textSummary}</div>
    </div>
  );
};

// PropTypes validation for LoadingScreen component
LoadingScreen.propTypes = {
    onComplete: PropTypes.func.isRequired
};
