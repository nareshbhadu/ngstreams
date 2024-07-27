import React, { useState } from 'react';
import tick from '../Assets/tick.svg';
import mir from '../Assets/mirzapur.jpg';
import { useEffect } from 'react';
// import gr from '../Assets/gr.svg';

export default function HeroSection() {
    const arr = ['Boost', 'Stream', 'Thrive'];
    const [curr, setCurr] = useState(arr[0]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = arr.indexOf(curr);
            const nextIndex = (currentIndex + 1) % arr.length;
            setCurr(arr[nextIndex]);
        }, 800);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [curr]);

    return (
        <>
            <div className='hero'>
                <div className="hero-left">
                    <div className="heroup">
                        Unleash <span className='tx'>AI</span>'s prowess to <span className='tx'>{curr}</span> beyond limits !
                    </div>
                    <p className="herodo">
                        NGStreams is a world class end-to-end product suite that enables you to step into the future where user satisfaction takes centre stage on Web, Android, iOS and Smart TVs.
                    </p>
                    <div className='grid-container'>
                        <img className="tic" src={tick} alt='...' />
                        <span>
                            Real Time Monitoring
                        </span>
                        <img className="tic" src={tick} alt='...' />
                        <span>
                            Proactive Anomaly Detection
                        </span>
                        <img className="tic" src={tick} alt='...' />
                        <span>
                            Playback Optimisation
                        </span>
                        <img className="tic" src={tick} alt='...' />
                        <span>
                            Data-Driven Decision-Making
                        </span>
                    </div>
                </div>
                <img className='hero-img' src={mir} alt="..." />
            </div>
        </>
    )
}
