import React , {useState , useEffect , useRef }from "react";

function Stopwatch () {

    const [isRunning , setIsRunning] = useState(false);
    const [elaspedTime , setElapsedTime] = useState(0);

    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        } 

        return () => {clearInterval(intervalRef.current)};

    } , [isRunning])

    function start() {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elaspedTime;
    }

    function stop() {
        setIsRunning(false);
    }

    function reset() {
        setIsRunning(false);
        setElapsedTime(0);
    }

    function formatTime() {
        let hours = Math.floor(elaspedTime / (1000 * 60 * 60));
        let minutes = Math.floor((elaspedTime / (1000 * 60)) % 60);
        let seconds = Math.floor((elaspedTime / 1000) % 60);
        let milliseconds = Math.floor((elaspedTime % 1000) / 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        milliseconds = milliseconds < 10 ? "0" + milliseconds : milliseconds;

        return `${minutes}:${seconds}:${milliseconds}`;
    }

    return <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button className="start-button" onClick={start}>Start</button>
            <button className="stop-button" onClick={stop}>Stop</button>
            <button className="reset-button" onClick={reset}>Reset</button>
        </div>
    </div>
}

export default Stopwatch