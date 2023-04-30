/* eslint-disable no-unused-vars */
import "./NavBar.css";
import "../CartWidget/CartWidget.css";

const NavBar = () => {
  const imgCarrito = "../src/assets/carrito.png";

  return (
    <header className="navbar navbar-expand-lg bg-body-tertiary pt-0 mt-0">
      <div className="container-fluid">
        <a className="navbar-brand mx-5 fs-2 fw-bold" href="#">
          SmartShoppers
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll navbar-scroll-help">
            <li className="nav-item mx-5">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item mx-5 dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Frutas & Verduras
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Productos Lacteos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Cereales
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item mx-5">
              <a className="nav-link active" aria-current="page" href="#">
                Sobre Nosotros
              </a>
            </li>
            <li className="nav-item mx-5">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar"
                  aria-label="Buscar"
                />
                <button className="btn btn-outline-dark border-1 font-dark" type="submit">
                  Buscar
                </button>
              </form>
            </li>
          </ul>
          <li className="nav-item mx-5 pe-5">
            <img
              src={imgCarrito}
              alt="Carrito"
              className="d-inline-block align-text-top logo-header imgCarrito"
            />
            <p>10</p>
          </li>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
