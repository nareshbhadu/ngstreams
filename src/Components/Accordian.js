import React, { Fragment, useEffect, useState } from "react";
import arrow from "../Assets/Icon Down.svg";

const Accordian = ({ data, sliderVal = 0, setSliderVal }) => {
  const [hidden, setHidden] = useState();

  useEffect(() => {
    setHidden(sliderVal);
  }, [sliderVal]);

  return (
    <div className="accordian_contanier">
      {data.map((item, idx) => {
        return (
          <Fragment key={idx}>
            <div
              style={typeof item.ans === "object" ? { width: "100%" } : {}}
              className="accordian_div"
            >
                <div className="ques">
                <p
                className="accordian_ques"
                onClick={() => {
                  setSliderVal && setSliderVal(item.id || item["_id"]);
                  setHidden(item.id || item["_id"]);
                }}
              >
                {item.ques || item.questions}
                
              </p>
              <span
                  className={
                    hidden === (item.id || item["_id"]) ||
                    sliderVal === (item.id || item["_id"])
                      ? "acc_arrow open"
                      : "acc_arrow"
                  }
                  onClick={() => {
                    setSliderVal && setSliderVal(item.id || item["_id"]);
                    setHidden(item.id || item["_id"]);
                  }}
                >
                  <img src={arrow} alt="arrow" />
                </span>
                </div>
             
              {typeof item.ans !== "object" ? (
                <p
                  className="accordian_ans"
                  style={
                    hidden === (item.id || item["_id"]) ||
                    sliderVal === (item.id || item["_id"])
                      ? { height: "auto" }
                      : {}
                  }
                >
                  {" "}
                  {item.ans || item.answer}
                </p>
              ) : (
                <ul
                  className="accordian_ans"
                  style={
                    hidden === item.id || sliderVal === item.id
                      ? { height: "auto" }
                      : {}
                  }
                >
                  {item.ans.map((points, i) => (
                    <div className="accordian_ul" key={i}>
                      <p>{points.text}</p>
                    </div>
                  ))}
                </ul>
              )}
            </div>
            {typeof item.ans !== "object" && <hr />}
          </Fragment>
        );
      })}
    </div>
  );
};

export default Accordian;
