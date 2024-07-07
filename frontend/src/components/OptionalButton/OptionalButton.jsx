import "./OptionalButton.scss"

const OptionalButton = ({ text }) => {
    return (
        <button className="optionalButton">{text ? text : "Publicar ahora"}</button>
    )
}

export default OptionalButton