import "./PublishService.scss"

import OptionalButton from "../../components/OptionalButton/OptionalButton"

const PublishService = () => {
    return (
        <div className="PublishService">
            <div className="cPublishService Container">
                <div className="text_pubhish">
                    <h1>Da de alta a tu servicio de <span>flete</span> en <strong>
                        <span>Hiper</span>enlace
                    </strong></h1>
                    <p>
                        No importa si estás comenzando con tu negocio, todos tienen la oportunidad de crecer
                        aumentando los clientes y generando una alta calificación de servicios.
                    </p>
                </div>
                <div className="cardPublish">
                    <h1>
                        Gana más con un flujo constante de clientes.
                    </h1>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>Control total de tus clientes y tus ganacias a través de la plataforma.</p>
                    </div>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>Mayor visibilidad de tus
                            servicios con oportunidad de recomendaciones de clientes a clientes y de
                            plataforma a clientes</p>
                    </div>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>Darse de alta es gratis y publicar tu servicio solo lleva 10 minutos.</p>
                    </div>
                    <OptionalButton />
                </div>
            </div>

            <div className="cPublishService Container">
                <div className="text_pubhish">
                    <h1>¿Cómo aumentar la <span>visibilidad</span> en <strong>
                        <span>Hiper</span>enlace
                    </strong>?</h1>
                    <p>
                        Aumenta tu visibilidad de servicios mediante la
                        promoción de anuncios. Nuestra plataforma garantiza que tu negocio
                        llegue a más usuarios potenciando así su alcance.
                    </p>
                </div>
                <div className="cardPublish">
                    <h1>
                        Gana más con anuncios en las principales partes de la plataforma.
                    </h1>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>Comparte la plataforma en redes sociales, a través del botón compartir luego de tener tu cuenta.</p>
                    </div>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>
                            Alcanza un total de 50 seguidores en los últimos 3 meses 
                        </p>
                    </div>
                    <div className="options">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#940757" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l5 5l10 -10" />
                        </svg>
                        <p>Darse de alta es gratis y publicar tu servicio solo lleva 10 minutos.</p>
                    </div>
                    <OptionalButton />
                </div>
            </div>
        </div>
    )
}

export default PublishService