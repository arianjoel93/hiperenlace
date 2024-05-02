import { InputText } from "primereact/inputtext"
import { Password } from 'primereact/password';
import "./Login.scss"
import SecundaryButton from "../../components/SecundaryButton/SecundaryButton"
import logo from "../../assets/logo.png"
import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

const Login = () => {
    const [user, setUser] = useState({})
    const clientID = "1021182784031-kk5qq5eevvubgndimk7sb7rc1megk051.apps.googleusercontent.com"

    useEffect(() => {
        const start = () => {

            gapi.auth2.init({
                clientId: clientID,
            })
        }
        gapi.load("client:auth2", start)
    }, [])

    const onSuccess = (response) => {
        setUser(response?.profileObj)
        alert("Inicio de sesión correcto")
    }
    const onFailure = () => {
        alert("Error al iniciar con google")
    }

    return (
        <div className="Login">
            <div className="cInfoLogin">
                <div className="cGoogle">

                    <GoogleLogin
                        className={"googleButton"}
                        clientId={clientID}
                        onSuccess={onSuccess}
                        onFailure={onFailure}
                        cookiePolicy={"single_host_policy"}
                        buttonText={"Inicia sesión con Google"}

                    />
                </div>
                {/* <div className={user ? "profile": "hidden"}>
                    <img src={user.imageUrl} alt="user"/>
                </div> */}
                <div className="logo">
                    <img src={logo} />
                    <h3>Hiperenlace</h3>
                </div>
                <InputText placeholder="Usuario" />
                <Password feedback={false} tabIndex={1} toggleMask placeholder="Contraseña" />
                <SecundaryButton text={"Entrar"} />
                <a href="/crear-cuenta">Crear cuenta</a>
            </div>
        </div>
    )
}

export default Login