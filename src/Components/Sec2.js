import React, { useEffect, useState } from 'react';
import artImg1 from '../Assets/sec2 images/img1.webp';
import artImg2 from '../Assets/sec2 images/img2.webp';
import artImg3 from '../Assets/sec2 images/img3.jpg';
import artImg4 from '../Assets/sec2 images/img4.webp';
import artImg5 from '../Assets/sec2 images/img5.jpeg';
import artImg6 from '../Assets/sec2 images/img6.webp';
import artImg7 from '../Assets/sec2 images/img7.jpg';
import artImg8 from '../Assets/sec2 images/img8.avif';

export default function Sec2() {
    const [active, setActive] = useState(1);

    const btnclk = (val) => {
        setActive(val);
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            const currentIndex = active;
            const nextIndex = (currentIndex + 1);
            if(nextIndex === 9) 
                setActive(nextIndex - 8);
            else
                setActive(nextIndex);
        }, 1500);

        // Cleanup function to clear the interval when component unmounts
        return () => clearInterval(intervalId);
    }, [active]);

    return (
        <>
            <div className='sec2'>
                <div className='sh1'>Accelerate to a digital future with our products</div>
                <div className='sh2'>"Customer centricity, innovation and ethical corporate governance are at our core."</div>
            </div>
            <div className="anime-container">
                <div className="button-container">
                    <button className={`btn ${active === 1 && 'btn-active'}`} onClick={() => btnclk(1)}>Ad Insertion and Targeting</button>
                    <button className={`btn ${active === 2 && 'btn-active'}`} onClick={() => btnclk(2)}>QoS/Qc For VOD OTT Platforms</button>
                    <button className={`btn ${active === 3 && 'btn-active'}`} onClick={() => btnclk(3)}>Transcoding and Adaptive Streaming</button>
                    <button className={`btn ${active === 4 && 'btn-active'}`} onClick={() => btnclk(4)}>Smart Meta Data</button>
                    <button className={`btn ${active === 5 && 'btn-active'}`} onClick={() => btnclk(5)}>CRA</button>
                    <button className={`btn ${active === 6 && 'btn-active'}`} onClick={() => btnclk(6)}>VR OTT Watch</button>
                    <button className={`btn ${active === 7 && 'btn-active'}`} onClick={() => btnclk(7)}>Personalisation and Recommendation</button>
                    <button className={`btn ${active === 8 && 'btn-active'}`} onClick={() => btnclk(8)}>SetTop Box</button>
                </div>
                <div className='articles'>
                    {active === 1 && <>
                        <div className='article'>
                            <h1>Unlocking Audience Engagement: <span className='tx'>Precision Ad Insertion & Targeting</span> </h1>
                            <p>Precision-targeted ad insertion to optimize audience engagement and ROI by delivering tailored messages to specific demographics.
                                Dynamic insertion technology dynamically adjusts ad content based on real-time data, maximizing ad effectiveness and viewer retention.</p>
                            <button className='article-btn'>Discover More</button>
                        </div>
                        <div className='article-image'><img src={artImg1} alt='articleImage1'/></div>
                    </>}
                    {active === 2 && <>
                        <div className='article'>
                            <h1><span className='tx'>Delivering Seamless Streaming:</span> Elevating Quality Assurance for VOD OTT Platforms</h1>
                            <p>Streamlining content delivery, our QoS/QC solution ensures flawless viewing experiences on VOD OTT platforms, enhancing customer satisfaction and retention.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg2} alt='articleImage2' /></div>
                    </>}
                    {active === 3 && <>
                        <div className='article'>
                            <h1><span className='tx'>Empowering Seamless Viewing:</span> Transformative Transcoding for Adaptive Streaming</h1>
                            <p>Revolutionizing content delivery, our transcoding solution optimizes media for flawless playback across devices, ensuring a seamless streaming experience. With adaptive streaming, content dynamically adjusts to network conditions, guaranteeing uninterrupted viewing for audiences worldwide.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg3} alt='articleImage3' /></div>
                    </>}
                    {active === 4 && <>
                        <div className='article'>
                            <h1>Enhance Engagement, Enrich Experience: Elevating OTT Content with Metadata <span className='tx'>Mastery</span> </h1>
                            <p>Empower your OTT platform with enriched metadata, unlocking deeper engagement and personalized user experiences. Our solution ensures seamless content discovery and relevance, driving viewer satisfaction and retention.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg4} alt='articleImage4' /></div>


                    </>}
                    {active === 5 && <>
                        <div className='article'>
                            <h1>Versatile Entertainment Hub: Home Viewing Experience with smart<span className='tx'>&nbsp;Set-Top boxes</span></h1>
                            <p>An all-in-one device offering diverse entertainment options and seamless connectivity for an enhanced viewing experience at the comfort of your home.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg5} alt='articleImage5' /></div>
                    </>}
                    {active === 6 && <>
                        <div className='article'>
                            <h1><span className='tx'>Unleash Insights, Amplify Impact:</span> Transforming Social Analytics into Actionable Strategies.</h1>
                            <p>Gain unparalleled understanding of audience sentiments and trends with our social analytics tool. Harness data-driven insights to optimize engagement, elevate brand presence, and drive meaningful interactions.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg6} alt='articleImage6' /></div>
                    </>}
                    {active === 7 && <>
                        <div className='article'>
                            <h1>Tailored Experiences, Endless Discoveries: Redefining Engagement Through <span className='tx'>Personalization and Recommendation </span></h1>
                            <p>Elevate user satisfaction with our cutting-edge personalization and recommendation engine. Harnessing AI, it delivers curated content, enhancing engagement and driving retention.</p>

                            <button className='article-btn'>Discover More</button>

                        </div>
                        <div className='article-image'><img src={artImg7} alt='articleImage7' /></div>
                    </>}

                    {active === 8 && <>
                        <div className='article'>
                            <h1>Dive into a New Reality: <span className="tx">Transforming Entertainment</span> with VR OTT Watch.</h1>
                            <p>Immerse yourself in virtual worlds with our VR OTT Watch technology, delivering high-resolution content and seamless streaming experiences. Harnessing advanced VR capabilities, it ensures compatibility across a range of devices for immersive entertainment anytime, anywhere.</p>
                                <button className='article-btn'>Discover More</button>
                        </div>
                        <div className='article-image'><img src={artImg8} alt='articleImage8' /></div>
                    </>}
                </div>
            </div>
        </>
    )
}
