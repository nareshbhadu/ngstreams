import React from 'react'
import gr from '../Assets/gr.svg';

export default function HeroCards() {
    return (
        <>
            <div className='gr'>
                <img src={gr} alt="" />
                <div className="card-cont">
                    <div className="card">Increased viewing sessions upto
                        <span className='txc'>72%</span> and managing over
                        <span className='txc'>75 million+</span> streaming sessions annually
                    </div>
                    <div className="card">Transcoded more than
                        <span className="txc">5 million+</span> hours of media content in multiple formats in
                        <span className='txc'>HDR10</span>
                    </div>
                    <div className="card"> Enriched
                        <span className="txc">20 million+</span> metadata entries resulting in fantastic user engagement up to
                        <span className="txc">93%</span>
                    </div>
                    <div className="card">Enabled seamless streaming for
                        <span className="txc">10 million+</span>households with
                        <span className="txc">45%</span>increase in user satisfaction
                    </div>
                    <div className="card">Analyzed over
                        <span className="txc">17 million+</span>social interactions, contributing to a
                        <span className="txc">96%</span> efficiency in platform strategies
                    </div>
                    <div className="card">Handled over
                        <span className="txc">5 billion+</span>concurrent sessions, ensuring
                        <span className="txc">88%</span>less zaptime during peak loads
                    </div>
                    <div className="card">Delivering to
                        <span className="txc">10 million+</span>global users, providing a
                        <span className="txc">58%</span>increase in content consumption
                    </div>
                </div>
            </div>
        </>
    )
}
