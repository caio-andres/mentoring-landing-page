import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      className="d-flex justify-content-around px-5 py-4"
      style={{ boxShadow: "0 4px 2px -5px gray" }}
    >
      <div className="d-flex mx-5 gap-2">
        <img
          src="/media/img/logo/eu-circle.png"
          width="70px"
          className="m-0 rounded-circle"
        />
        <div className="d-flex flex-column justify-content-center">
          <p
            className="m-0 fs-3 d-flex align-items-center text-logo"
            style={{
              transition: "0.3s",
              fontFamily: "Fabiolo",
            }}
          >
            caio_andress
          </p>
          <p
            className="m-0 link-secondary fw-bold"
            style={{ transition: "0.3s" }}
          >
            Desenvolvedor FullStack
          </p>
        </div>
      </div>
      <nav className="navbar-expand-lg d-flex align-items-center">
        <ul className="navbar-nav gap-5 d-flex align-items-center">
          <li className="nav-item">
            <Link
              className="nav-link text-uppercase"
              style={{ fontSize: "14px" }}
            >
              Sobre a Mentoria
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-uppercase"
              style={{ fontSize: "14px" }}
            >
              O que você aprenderá
            </Link>
          </li>
          <li className="">
            <Link
              className="nav-link text-uppercase"
              style={{ fontSize: "14px" }}
            >
              Quem é Caio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active-nav text-uppercase bg-dark p-4 border border-primary"
              style={{ fontSize: "14px", color: "#2b77ce" }}
            >
              Comece Agora
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
