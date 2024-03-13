import '../styles/Login.css'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="app-login">
      <div>
        <img src="src/assets/pills.png" className="pills-img" alt="Pills image" />
      </div>
      <form className="login-form">
        <label>Correo Electronico
          <input type="email" placeholder="correo@examplie.com"/>
        </label>
        <label>Contraseña
          <input type="password"/>
        </label>
        <Link to="home/users" className="login-button button">Entrar</Link>
      </form>
    </div>
  )
}

export default Login
