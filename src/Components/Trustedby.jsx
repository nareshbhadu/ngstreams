import React from "react";
import marque1 from "../Assets/Trustedby/marque1.png";
import marque2 from "../Assets/Trustedby/marque2.png";
import marque3 from "../Assets/Trustedby/marque3.png";
import marque4 from "../Assets/Trustedby/marque4.png";
import marque5 from "../Assets/Trustedby/marque5.png";
import marque6 from "../Assets/Trustedby/marque6.png";

const TrustedBy = () => {
  const imgTag = [
    {
      img: marque1,
    },
    {
      img: marque2,
    },
    {
      img: marque3,
    },
    {
      img: marque4,
    },
    {
      img: marque5,
    },
    {
      img: marque6,
    }
  ];

  return (
    <>
      <div className="trusted_by_sec">
        <div className="conatiner">
          <h3>Trusted by</h3>
          <marquee className="marquee" scrollamount="12">
            <div className="gardient">
              {imgTag?.map((ele,idx) => {
                return (
                    <div className="linear" key={idx} >
                      <img className="img_name" src={ele.img} alt={ele.img}/>
                    </div>
                )
              })}
            </div>
          </marquee>
        </div>
      </div>
    </>
  );
};

export default TrustedBy;
