import "./SecundaryButton.scss"

const SecundaryButton = ({ text }) => {
    return (
        <button className="secundary">{text ? text : "Iniciar sesión"}</button>
    )
}

export default SecundaryButton