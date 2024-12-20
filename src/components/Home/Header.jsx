import "./Header.css";
import Logo from "../../assets/Logo.svg";
import DarkMode from "../DarkMode.jsx";
const Header = () => {
  return (
    <div className="head-container">
      <img src={Logo} className="Logo-image" alt="logo" />
      <div className="nav-container">
        <p className="nav-text">HOME</p>
        <p className="nav-text">ABOUT</p>
        <p className="nav-text">PORTFOLIO</p>
        <p className="nav-text">CONTACT</p>
      </div>
      <div className="toggle-btn">
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
