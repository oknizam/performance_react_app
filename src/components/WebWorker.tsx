import React, { useState, useEffect, useRef } from 'react';

const ChildWorker = () => {
    const [bgColor, setBgColor] = useState("");
    const webWorkerRef = useRef(null);

    useEffect(() => {
        webWorkerRef.current = new Worker(new URL('../utils/worker.ts', import.meta.url));

        return () => {
            webWorkerRef.current.terminate();
        };
    }, []);

    const handleBackground = () => {
        setBgColor(prev => (prev === "" ? "red" : ""));
    };

    const calculateSum = () => {
        // sender
        webWorkerRef.current.postMessage("calculateSum");

        // reciver
        webWorkerRef.current.onmessage = (res: any) => {
            console.log(`sum -> ${res.data}`, res)
        }

    };

    return (
        <div style={{ width: "100%", height: "100%", background: bgColor }}>
            <button onClick={handleBackground}>Change Background</button>
            <button onClick={calculateSum}>Calculate Sum</button>
        </div>
    );
};

export default ChildWorker;
