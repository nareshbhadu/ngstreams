import React, { useState } from 'react'
import edu from "../Assets/bussiness/edu.png";
import fitness from "../Assets/bussiness/fitness.png";
import media from "../Assets/bussiness/media.jpeg";
import news from "../Assets/bussiness/news.png";
import sports from "../Assets/bussiness/sports.png";
import Animecard from './Anime-card';

export default function Bussiness() {
  const imgPart = [
    {
      key: 1,
      imgName: media,
      imgHeading: "Media & Broadcast",
      desc: "Our platform bolsters Media and Broadcast by guaranteeing seamless content delivery, maintaining exceptional quality, and providing real-time insights for ongoing performance enhancements and audience engagement.",
    },
    {
      key: 2,
      imgName: news,
      imgHeading: "News",
      desc: "We help the News industry by ensuring swift, reliable content delivery, upholding superior quality standards, and offering real-time insights to optimize audience engagement and news dissemination.",
    },
    {
      key: 3,
      imgName: edu,
      imgHeading: "Education",
      desc: "Our platform supports the Education industry by facilitating rapid, dependable content delivery, maintaining high-quality standards, and providing real-time insights to enhance student engagement and learning experiences.",
    },
    {
      key: 4,
      imgName: sports,
      imgHeading: "Sports",
      desc: "Our QoE/QoS platform revolutionizes the Sports industry by guaranteeing swift content delivery, upholding superior quality standards, and providing real-time insights to optimize viewer engagement and elevate sporting event experiences.",
    },
    {
      key: 5,
      imgName: fitness,
      imgHeading: "Fitness",
      desc: "We help Fitness enterprises to drive digital engineering initiatives by helping them provide a rich, seamless experience to their customers across digital channels resulting in higher engagement, efficiency, and profitability.",
    },
  ];
  const [anime, setAnime] = useState(0);
  const handlemouse = (val) => {
    setAnime(val);
  }
  const cards = imgPart.map((data) => {
    return(
    <div className="business-card" key={data.key} onMouseOver={() => handlemouse(data.key)} onMouseOut={() => handlemouse(0)}>
        <Animecard imgsrc={data.imgName} animekey={anime === data.key} text={data.imgHeading} body={data.desc} />
    </div>
    )
})
  return (
    <>
      <div className='cont3'><div className='ellipse2'></div></div>
      <div className="business-head">
        <div className="head1">Innovative solutions tailored for diverse business landscapes</div>
        <div className="head2">Power up your online business on the rock-solid foundation created by NGStreams.</div>
      </div>
      <div className="business-cards-cont">
        <div className="business-cards">{cards}</div>
      </div>
    </>
  )
}
