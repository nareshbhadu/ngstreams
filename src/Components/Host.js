import React, { useState } from 'react'
import himg1 from '../Assets/host section/img1.jpg'
import himg2 from '../Assets/host section/img2.jpg'
import himg3 from '../Assets/host section/img3.jpg'
import himg4 from '../Assets/host section/img4.jpeg'
import himg5 from '../Assets/host section/img5.jpg'
import himg6 from '../Assets/host section/img6.jpg'
import Animecard from './Anime-card'

export default function Host() {
    const [anime, setAnime] = useState(0);
    const handlemouse = (val) => {
        setAnime(val);
    }
    const data = [
        {
            key: 1,
            source: himg1,
            text: 'IPTV/OTT Mkeydleware',
            body: 'Integrates and manages content delivery for online vkeyeo streaming services.'
        },
        {
            key: 2,
            source: himg2,
            text: 'Ingest & Transcode',
            body: 'Capture and convert media files for diverse digital platforms seamlessly.'
        },
        {
            key: 3,
            source: himg3,
            text: 'Multi-Screen Apps',
            body: 'Applications adapted for seamless use across various screen sizes/devices.'
        },
        {
            key: 4,
            source: himg4,
            text: 'Content Delivery Network',
            body: 'Network optimizing content distribution for faster, reliable access globally.'
        },
        {
            key: 5,
            source: himg5,
            text: 'Security/DRM',
            body: 'Protection and control mechanisms ensuring secure content distribution and usage.'
        },
        {
            key: 6,
            source: himg6,
            text: 'Real-Time Analytics',
            body: 'Instant analysis of data for immediate insights and informed decisions.'
        }
    ]
    const cards = data.map((data) => {
        return(
        <div className="able-hold" key={data.key} onMouseOver={() => handlemouse(data.key)} onMouseOut={() => handlemouse(0)}>
            <Animecard imgsrc={data.source} animekey={anime === data.key} text={data.text} body={data.body} />
        </div>
        )
    });
    return (
        <>
            <div className="host-container">
                <div className="host-headings">
                    <div className="host-head1">Robust Hosting, Monetisation, and Broadcasting Capabilities</div>
                    <div className="host-head2">Solkey infrastructure for content delivery, revenue generation, and seamless broadcasting.</div>
                </div>
                <div className="host-cards">
                    {cards}
                </div>
            </div>
        </>
    )
}
