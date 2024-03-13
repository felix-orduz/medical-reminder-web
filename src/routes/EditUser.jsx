import '../styles/CreateUser.css'
import { Link } from "react-router-dom";

function EditUser() {
	return (
		<div className="create-user">
			<h2>Editar Usuario</h2>
			<form className="create-user-form" >
				<label>Nombre
					<input type="text" placeholder="Nombre"/>
				</label>
				<label>Apellido
					<input type="text" placeholder="Apellido"/>
				</label>
				<label>Correo Electronico
					<input type="email" placeholder="correo@examplie.com"/>
				</label>
				<label className="create-user-form-date">Fecha de nacimiento
					<input type="date" placeholder="Seleccione una fecha"/>
				</label>
			</form>
			<div className="create-user-buttons">
			<Link to="/home/users" className="create-user-primary-button button">Editar usuario</Link>
				<Link to="/home/users" className="create-user-secoundary-button button">Cancelar</Link>
			</div>
		</div>
	)
}
  
  export default EditUser