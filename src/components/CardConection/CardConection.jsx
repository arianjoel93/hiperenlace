import "./CardConection.scss";
import user from "../../assets/profile.webp";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

const CardConection = () => {
  const numero = 12345.67;
  const formatoMoneda = numero.toLocaleString("es-ES", {
    style: "currency",
    currency: "MXN",
  });
  return (
    <div className="CardConection">
      <div className="cInfo">
        <img src={user} alt="user" />
        <div className="info">
          <p>
            <strong>Empresa: </strong>Joel Trincado Ventura
          </p>
          <p>
            <strong>País: </strong>México
          </p>
        </div>
      </div>
      <div className="description">
        <p>
          <strong>Tipo de enlace: </strong>Emprendedor
        </p>
        <p>
          <strong>Inversión requerida: </strong>
          {formatoMoneda}
        </p>
        <p>
          <strong>Utilidad mensual: </strong>
          {formatoMoneda}
        </p>
        <p>
          <strong>Sector de inversión: </strong>Software
        </p>
        <strong>Descripción:</strong>
        <h4>
          Nuestra empresa de desarrollo de software está en constante
          crecimiento, pero necesitamos un impulso adicional para llevar
          nuestras innovadoras soluciones al siguiente nivel. Buscamos un
          inversor que comparta nuestra visión y nos brinde los recursos
          necesarios para expandirnos y alcanzar nuestro máximo potencial en el
          mercado.
        </h4>
        <div className="cBton">
          <SecundaryButton text={"Saber más"} />
        </div>
      </div>
    </div>
  );
};

export default CardConection;
