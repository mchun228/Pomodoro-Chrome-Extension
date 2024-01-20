import React, { useEffect } from 'react';
import './App.css'; 
import { clear } from 'console';
function App() {


  const [timeLeft, setTimeLeft] = React.useState(25 * 60);
  useEffect(() => {
    // Update the timer every second
    const timer = setInterval(() => {
      setTimeLeft(timeLeft => {
        if (timeLeft > 0) {
          return timeLeft - 1;
        } else {
          clearInterval(timer);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const format = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="App">
      <h1>Pomodoro Stopwatch</h1>
      <div className="base-timer">
        <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <g className="base-timer__circle">
            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
          </g>
        </svg>
        <span className="base-timer__label">
          {format(timeLeft)}
        </span>
      </div>
    </div>
  );
}


export default App;