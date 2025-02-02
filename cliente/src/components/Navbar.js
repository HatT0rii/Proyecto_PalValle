import React,{useState} from "react";
import {Link} from "react-router-dom"


function Navbar() {
  const [collapsed, setCollapsed] = useState(true)
  const manejarNavbar = () => setCollapsed(!collapsed)

  return (
    //   <div className="header">
    //   <div className="menu-bar">
    <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container">
           {/*      <Link className="nav-logo" to="/PalValle">
                <img src={Logo} alt="PalValle" width="90" height="80"/>
                </Link> */}
            <Link className="navbar-brand text-white fw-bolder" to="/">
           {/* <img src={Logo} alt="PalValle"/> */}
                <h3 className="nombre_logo fw-bold fs-1 text-center my-auto">PalValle</h3>
            </Link>
                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded={!collapsed ? true : false}
                aria-label="Toggle navigation"
                onClick={manejarNavbar}
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${collapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
                  <ul className="navbar-nav me-2 mx-auto">
                      <li className="nav-item">
                      <Link className="nav-link fw-bolder fs-5  " to="/detalle/:id">
                          Productos
                      </Link>
                      </li>
                      <li className="nav-item">
                      <Link className="nav-link fw-bolder fs-5" to="/categorias">
                          Categorias
                      </Link>
                      </li>
                  </ul>
                  <div>
                      <ul className="navbar-nav">
                        <li className="nav-item">
                          <Link className="nav-link fs-4" to="/carrito">
                            <i className="fas fa-shopping-cart "/>
                          </Link>
                        </li>
                      </ul>
                  </div>
                </div>
            </div>
    </nav>
    // </div>
    //         </div>
  );
}

export default Navbar;