import '../styles/Users.css'
import { Link } from "react-router-dom";
import USER_LIST from "../utils/userList"
import Dots from "../assets/dots.svg"


function Users() {
  
  return (
    <>
      <table className="users-table table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre completo</th>
            <th scope="col">Nombre de usuario</th>
            <th scope="col">Edad</th>
            <th scope="col">Subscrito</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          { USER_LIST.map((user) => (
            <tr key={user.id}>
              <td><input type="checkbox"/> <img src={Dots} alt="Sort icon"/></td>
              <td>{user.name}</td>
              <td>{user.userName}</td>
              <td>{user.age}</td>
              <td>{user.subscribed}</td>
              <td><a>Eliminar</a><Link to={`${user.id}/edit`}>Editar</Link></td>
            </tr>
          ))
          }
      </tbody>
      </table>
      <Link to="create-user" className="users-button button">Agregar Nuevo Usuario</Link>
    </>
  )
}

export default Users