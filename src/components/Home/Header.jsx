import "./Header.css";
import Logo from "../../assets/Logo.svg";
import DarkMode from "./Mode/DarkMode.jsx";
const Header = () => {
  return (
    <div className="head-container">
      <img src={Logo} className="Logo-image" alt="logo" />
      <div className="nav-container">
        <a href="#main-container" className="nav-text">
          HOME
        </a>
        <a href="#About-main-container" className="nav-text">
          ABOUT
        </a>
        <a href="#Myworks-contanier" className="nav-text">
          PORTFOLIO
        </a>
        <a href="#connect-main-container" className="nav-text">
          CONTACT
        </a>
      </div>
      <div className="toggle-btn">
        <DarkMode />
      </div>
    </div>
  );
};

export default Header;
