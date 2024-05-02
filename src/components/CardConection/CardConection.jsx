import "./CardConection.scss"
import user from "../../assets/profile.webp"
import SecundaryButton from "../SecundaryButton/SecundaryButton"

const CardConection = () => {
    return (
        <div className='CardConection'>
            <div className="cInfo">
                <img src={user} />
                <div className="info">
                    <p><strong>Nombre: </strong>Joel Trincado Ventura</p>
                    <p><strong>País: </strong>México</p>
                    <p><strong>Tipo de enlace: </strong>Emprendedor</p>
                    <p><strong>Sector de inversión: </strong>Software</p>

                </div>
            </div>
            <div className="description">
                <h2>Descripción:</h2>
                <h4>
                    Nuestra empresa de desarrollo de software está en constante crecimiento,
                    pero necesitamos un impulso adicional para llevar nuestras innovadoras
                    soluciones al siguiente nivel. Buscamos un inversor que comparta nuestra
                    visión y nos brinde los recursos necesarios para expandirnos y alcanzar nuestro
                    máximo potencial en el mercado.
                </h4>
                <div className="cBton">
                <SecundaryButton text={"Saber más"}/>
                </div>
            </div>
        </div>
    )
}

export default CardConection