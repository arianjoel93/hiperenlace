import { useNavigate } from "react-router-dom"
import "./PrimaryButton.scss"

const PrimaryButton = ({ text, url }) => {
    const navigate = useNavigate()

    const handleClick = ()=>{
        if (url){
            navigate(`/${url}`)
        }
        else{
            navigate('/')
        }
    }
    return (
        <button onClick={handleClick} className="primary">{text ? text : "Iniciar sesión"}</button>
    )
}

export default PrimaryButton