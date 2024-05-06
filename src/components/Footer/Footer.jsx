import "./Footer.scss"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <footer className='Footer'>
            <div className="container cFotter">

                <div className="logo">
                    <img src={logo} alt="logo-footer" />
                    <strong>
                        <span>Hiper</span>enlace
                    </strong>
                </div>
                <div className="socialNetworks">

                </div>
                <div className="footerNetworks">
                    <a>Contáctanos</a>
                    <a>Publicidad</a>
                    <a>Publica tu negocio</a>
                    <a>Apoyo a la plataforma</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer