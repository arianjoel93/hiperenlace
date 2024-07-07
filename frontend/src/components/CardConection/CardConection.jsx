import "./CardConection.scss";
import user from "../../assets/flete.png";
import SecundaryButton from "../SecundaryButton/SecundaryButton";

const CardConection = () => {
    const numero = 12345.67;
    const formatoMoneda = numero.toLocaleString("es-ES", {
        style: "currency",
        currency: "MXN",
    });
    return (
        <div className="CardConection">
            <img src={user} alt="user" />
            <div className="info">
                <h1>Fletes para mudanzas dentro del área metropolitana de Guadalajara</h1>
                <p><strong>Nombre: </strong>Joel Trincado Ventura</p>
                <div className="dimensions">
                    <p><strong>Dimensiones: </strong></p>
                    <p>Ancho: 1.50 m</p>
                    <p>Largo: 2.20 m</p>
                    <p>Alto: 3.50 m</p>
                </div>
                <p className="description">
                    <strong>Descripción: </strong>
                    Nulla cursus tincidunt turpis in pretium. Vestibulum laoreet mollis libero sit
                    amet porta. In non urna sed nisl congue rhoncus nec nec leo. Suspendisse potenti.
                    Ut sed convallis mi.
                </p>
                <div className="btn">
                    <div className="cScore">
                        <div className="score">8.5</div>
                        <p>1073 calificaciones</p>
                    </div>
                    <SecundaryButton text={"Ver más"} />
                </div>
            </div>
        </div>
    );
};

export default CardConection;
