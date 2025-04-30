import Buttons from "./Buttons"
import { useEffect, useRef, useState } from "react"
const Time=()=>{
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
      }, 1000);
    } 

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

   const handleResume =()=>{
    setIsRunning(true)
   };

    const handleStop=()=>{
      setIsRunning(false)
    }
    
   return(
    <>
      <div className="totalCarrier">
        <div className="carrier">
          <p className="pad">{seconds}</p>
          <button className="bub" onClick={handleStart}>Start</button >
          <button className="bub" onClick={handlePause}>Pause</button >
          <button className="bub" onClick={handleReset}>Reset</button >
          <button className="bub" onClick={handleResume}>Resume</button >
          <button className="bub" onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
   )
}

export default Time