import "./Connect.css";
import Logo from "../../assets/Logo.svg";
import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Facebook from "../../assets/Facebook.svg";
const Connect = () => {
    const emailAddress = "photography-email@example.com"; 
    const handleMailTo = () => {
      const mailtoLink = `mailto:${emailAddress}`;
      window.location.href = mailtoLink;
    };
    return (
      <div id="connect-main-container">
        <div className="connect-me-container">
          <span className="connect-me-text contact1 ">Contact me</span>
          <span className="connect-me-text contact2">Contact me</span>
          <span className="connect-me-text contact3">Contact me</span>
        </div>
        <div className="connect-sent">
          <span className="connect-sent-text">LET’S CONNECT</span>
          <button onClick={handleMailTo} className="connect-sent-btn">
            SEND MAIL
          </button>
        </div>
        <div className="connect-information-container">
          <div className="connect-information-logo">
            <div className="connect-logo">
              <img src={Logo} alt="logo" />
            </div>
            <div className="connect-logo-information">
              <span className="address">
                Akshya Nagar 1st Block 1st Cross, Rammurthy nagar,
                Bangalore-560016
              </span>
            </div>
          </div>
          <div className="connect-information-pages">
            <a className="navbar">QUICK LINKS</a>
            <a href="#main-container" className="navbar">
              HOME
            </a>
            <a href="#About-main-container" className="navbar">
              ABOUT
            </a>
            <a href="#Myworks-contanier" className="navbar">
              PORTFOLIO
            </a>
            <a href="#connect-main-container" className="navbar">
              CONTACT
            </a>
          </div>
          <div className="connect-information-contact">
            <div className="media-contacts">
              <img src={Instagram} className="instagram-logo" alt="Instagram" />
              <img src={Twitter} className="Twitter-logo" alt="Twitter" />
              <img src={Facebook} className="Facebook-logo" alt="Fcebook" />
            </div>
          </div>
        </div>
        <div className="copywrite-container">
          <span className="copywrite-text">
            Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    );
}

export default Connect