import {
    twitterLogo,
    instagramLogo,
    youtubeLogo,
    linkedinLogo,
  } from "../Assets/icons";
  import { FOOTER_LIST } from "../Constants/table";
  import logo from "../Assets/logoS.png";
  
  const Footer = () => {
    return (
      <footer id="contact" className="footer-section">
        <div className="d-flex">
          <div className="left-info">
            <div className="footer_logo">
              <a href="/"><img src={logo} alt="footer-logo" /></a>
            </div>
  
            <div className="footer-text">
              We help startups and enterprises to drive digital engineering
              initiatives by helping them provide a rich, seamless experience to
              their customers across digital channels resulting in higher
              engagement, efficiency, and profitability.
            </div>
            <div className="social-icon">
              <div className="icon">{twitterLogo}</div>
              <div className="icon">{instagramLogo}</div>
              <div className="icon">{youtubeLogo}</div>
              <div className="icon">{linkedinLogo}</div>
            </div>
            <div className="copyright-content">
              Copyright 2023 © NGStreams. All right reserved.
            </div>
          </div>
          {FOOTER_LIST.map((ele, i) => (
            <div className="footer-list" key={i}>
              <ul>
                <li style={{ listStyleType: "none" }}>
                  <h3 className="heading">{ele.heading}</h3>
                </li>
                {ele.list.map((list, j) => {
                  return (
                    <li
                      key={list.name}
                      className={`content${i === 1 && j === 0 ? "1" : ""} `}
                    >
                      {i === 2 && j === 0 ? (
              <a href="https://nexgeniots.com/about-us/" target="_blank" rel="noreferrer">{list.name}</a>
            ) : i === 2 && j === 1 ? (
              <a href="https://nexgeniots.com/contact-us/" target="_blank" rel="noreferrer">{list.name}</a>
            ) : i === 2 && j === 2 ? (
              <a href="https://nexgeniots.com/careers/" target="_blank" rel="noreferrer">{list.name}</a>
            ) : i === 3 && j === 0 ? (
              <a href="https://nexgeniots.com/privacy-policy-2/" target="_blank" rel="noreferrer">{list.name}</a>
            ): (<a smooth="true" href={list.routing}>{list.name}</a>)}</li>);
                })}
              </ul>
            </div>
          ))}
  
          <div className="connect">
            <h3 className="heading">Quick Connect</h3>
            <p className="sub-heading">Call Us</p>
            <p className="content text-transform-none"><a href="tel:+919319765541">+91-9319765541</a></p>
            <h3 className="sub-heading">Email Us</h3>
            <p className="content text-transform-none"><a href="mailto:sales@nexgeniots.com">sales@nexgeniots.com</a></p>
            <p className="content text-transform-none"><a href="mailto:support@nexgeniots.com">support@nexgeniots.com</a></p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  