import '../styles/Home.css'
import { Link, Outlet, NavLink } from "react-router-dom";

function Home() {

  return (
    <div className="home">
      <header className="home-header">
        <nav className="home-menu">
          <ul className="home-menu-nav">
            <li className="home-menu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to="users"
              >
                Usuarios
              </NavLink>
            </li>
            <li className="home-menu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to="reports"
              >
                Reportes
              </NavLink>
            </li>
            <li className="home-menu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to="prices"
              >
                Precios
              </NavLink>
            </li>
            <li className="home-menu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to="campaigns"
              >
                Campaña
              </NavLink>
            </li>
            <li className="home-menu-link">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active" : ""
                }
                to="meds"
              >
                Medicamentos
              </NavLink>
            </li>
            <li className="home-menu-link"><Link to="/">Salir</Link></li>
          </ul>
        </nav>
        <input type="search" placeholder="Search"/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Home