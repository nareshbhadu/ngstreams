import React from "react";
import bannerImage from "../Assets/Banner/Banner.png";
import './css/style.css';

const Banner = () => {
    return (
        <div className="banner">
            <div className="bg1">
                <div className="bg2">
                    <div className="banner-container">
                        <img src={bannerImage} alt="Wide Screen" />
                        <div className="banner-info">
                            <div className="banner-header">
                                <h1>Why Media Houses love NGStreams</h1>
                                <h4>Companies matter more than technical specs do</h4>
                                <p className="text-gradient">We put companies first.</p>
                            </div>
                            <div className="banner-container">
                                <div className="banner-items">
                                    <div className="banner-item">
                                        <h4>OTT Solution Provider in India</h4>
                                        <p>
                                            We aid businesses in digital engineering initiatives with
                                            dependable guidance.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="banner-item">
                                        <h4>Intuitive User Experience</h4>
                                        <p>
                                            NGStreams ensures effortless access with user-friendly
                                            design and seamless navigation.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="banner-item">
                                        <h4>Personalized Content Curation</h4>
                                        <p>
                                            We excel by tailoring content, enhancing satisfaction
                                            through personalized recommendations.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="banner-item">
                                        <h4>Exceptional Quality of Service</h4>
                                        <p>
                                            Consistently high QoS assures smooth streaming, elevating
                                            user satisfaction.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="banner-item">
                                        <h4>Customer-First Approach</h4>
                                        <p>
                                            Centered on customer feedback for continual improvement
                                            and satisfaction.
                                        </p>
                                        <hr />
                                    </div>
                                    <div className="banner-item">
                                        <h4>Responsive Customer Support</h4>
                                        <p>
                                            Valuing feedback, prompt support, engaging to enhance
                                            overall user experience.
                                        </p>
                                        <hr />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
