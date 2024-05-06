import "./Header.scss";
import logo from "../../assets/logo.png";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Header = () => {
  return (
    <header className="Header">
      <div className="cHeader container">
        <div className="nameLogo">
          <img src={logo} alt="logo" />
          <strong>
            <span>Hiper</span>enlace
          </strong>
        </div>
        <nav>
          <a href="/">Inicio</a>
          <a href="/quienes-somos">Quiénes somos</a>
          <a href="/publicar-mi-servicio">Publicar mi servicio</a>
          <PrimaryButton url={"login"} />
        </nav>
      </div>
    </header>
  );
};

export default Header;
