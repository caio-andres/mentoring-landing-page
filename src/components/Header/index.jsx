import { useState } from "react";
import "./header.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  DivResponsive,
  MenuHide,
  MenuHideAbout,
  MenuHideStart,
} from "./styles";

import LogoPicture from "./modals/LogoPicture";

function Header() {
  const [openLogoPicture, setOpenLogoPicture] = useState(false);

  return (
    <>
      {/* DIVS */}

      <header
        className="d-flex justify-content-around px-5 py-2"
        style={{ boxShadow: "0 4px 2px -5px gray", marginLeft: "auto", marginRight: "auto", marginBottom: "50px" }}
      >
        <DivResponsive className="d-flex mx-5 gap-2">
          <img
            src="/media/img/logo/eu-circle.png"
            width="70px"
            className="m-0 rounded-circle"
            onClick={() => setOpenLogoPicture(true)}
            style={{
              transition: "transform 0.3s ease-in-out",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          />
          <div className="d-flex flex-column justify-content-center">
            <p
              className="m-0 fs-3 d-flex align-items-center text-logo"
              style={{
                transition: "0.3s",
                fontFamily: "Fabiolo",
                cursor: "pointer",
              }}
              onClick={() => setOpenLogoPicture(true)}
            >
              caio_andress
            </p>
            <p
              className="m-0 link-secondary fw-bold"
              style={{
                transition: "0.3s",
                cursor: "pointer",
                fontSize: "13px",
              }}
              onClick={() => setOpenLogoPicture(true)}
            >
              Desenvolvedor FullStack
            </p>
          </div>
        </DivResponsive>

        <MenuHideStart className="text-light navbar-expand-lg d-flex align-items-center">
          <div className="navbar-nav gap-5 d-flex align-items-center">
            <MenuHideAbout
              className="nav-link text-uppercase text-center fw-bold letter-spacing"
              href=""
              style={{ fontSize: "12px" }}
            >
              Sobre a Mentoria
            </MenuHideAbout>
            <MenuHide
              className="nav-link text-uppercase text-center fw-bold letter-spacing"
              href=""
              style={{ fontSize: "12px" }}
            >
              O que você aprenderá
            </MenuHide>
            <MenuHide
              className="nav-link text-uppercase text-center fw-bold letter-spacing"
              href=""
              style={{ fontSize: "12px" }}
            >
              Quem é Caio
            </MenuHide>
            <a
              className="link-btn text-uppercase p-4 px-5 py-3 fw-bold text-center fw-bold letter-spacing"
              href=""
              style={{ fontSize: "12px" }}
            >
              Realizar Mentoria
            </a>
          </div>
        </MenuHideStart>
      </header>

      {/* MODALS */}

      <LogoPicture
        openLogoPicture={openLogoPicture}
        onClose={() => setOpenLogoPicture(false)}
        setOpenLogoPicture={() => setOpenLogoPicture(false)}
      />
    </>
  );
}

export default Header;
