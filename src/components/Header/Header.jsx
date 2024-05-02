import "./Header.scss";
import logo from "../../assets/logo.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Header = () => {
  return (
    <div className="Header">
      <div className="cHeader container">
        <div className="nameLogo">
          <img src={logo} alt="logo" />
          <strong>
            <span>Hiper</span>enlace
          </strong>
        </div>
        <nav>
          <a>Inicio</a>
          <a>Quiénes somos</a>
          <a>Publica tu negocio</a>
          <a>Invierte en un negocio</a>
          <PrimaryButton url={"login"} />
        </nav>
      </div>
    </div>
  );
};

export default Header;
