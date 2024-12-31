import Instagram from "../../assets/Instagram.svg";
import Twitter from "../../assets/Twitter.svg";
import Facebook from "../../assets/Facebook.svg";

import "./About.css";
const About = () => {
  return (
    <>
      <div id="About-main-container">
        <div className="About-image">
          <div className="About-image-container">
            <div className="About-body-content">
              <div className="About-me-container">About Me</div>
              <div className="About-main-text">
                My name is Alex Novo, I’m a Photographer.
              </div>
              <div className="About-sub-text">
                The world without photography will be meaningless to us if there
                is no light and color, which opens up our minds and expresses
                passion.
              </div>
              <div className="About-sub-text">
                My photos are inspired by light,color,creative
                perspective,techniques & personalities.
              </div>
              <div className="media-contact">
                <img
                  src={Instagram}
                  className="instagram-logo"
                  alt="Instagram"
                />
                <img src={Twitter} className="Twitter-logo" alt="Twitter" />
                <img src={Facebook} className="Facebook-logo" alt="Fcebook" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
