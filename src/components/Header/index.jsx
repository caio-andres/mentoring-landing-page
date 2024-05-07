import "./header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { DivResponsive, MenuHide, MenuHideAbout, MenuHideStart } from "./styles";

function Header() {
  return (
    <header
      className="d-flex justify-content-around px-5 py-4"
      style={{ boxShadow: "0 4px 2px -5px gray" }}
    >
      <DivResponsive className="d-flex mx-5 gap-2">
        <img
          src="/media/img/logo/eu-circle.png"
          width="70px"
          className="m-0 rounded-circle"
        />
        <div className="d-flex flex-column justify-content-center">
          <p
            className="m-0 fs-3 d-flex align-items-center text-logo"
            style={{ transition: "0.3s", fontFamily: "Fabiolo" }}
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
      </DivResponsive>

      <MenuHideStart className="text-light navbar-expand-lg d-flex align-items-center">
        <div className="navbar-nav gap-5 d-flex align-items-center">
          <MenuHideAbout
            className="nav-link text-uppercase text-center fw-bold"
            href=""
            style={{ fontSize: "14px" }}
          >
            Sobre a Mentoria
          </MenuHideAbout>
          <MenuHide
            className="nav-link text-uppercase text-center fw-bold"
            href=""
            style={{ fontSize: "14px" }}
          >
            O que você aprenderá
          </MenuHide>
          <MenuHide
            className="nav-link text-uppercase text-center fw-bold"
            href=""
            style={{ fontSize: "14px" }}
          >
            Quem é Caio
          </MenuHide>
          <a
            className="nav-link-btn active-nav text-uppercase p-4 px-5 py-3 fw-bold text-center fw-bold"
            href=""
            style={{ fontSize: "14px" }}
          >
            Comece Agora
          </a>
        </div>
      </MenuHideStart>
    </header>
  );
}

export default Header;
