import React from "react";
import "./mentoring.css";

const Mentoria: React.FC = () => {
  return (
    <>
      <main className="d-flex flex-column justify-content-center">
        <div className="container" style={{ marginTop: "2rem" }}>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex flex-column">
              <span className="fs-1 letter-spacing">Aprenda</span>
              <span className="fs-1 letter-spacing">
                a <span className="typewriter">Programar do zero.</span>
              </span>
            </div>
            <a
              className="link-btn p-4 px-5 py-3 text-center fw-bold letter-spacing w-50"
              href=""
              style={{ fontSize: "12px" }}
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>

        <div className="container gap-5">
          <div
            className="d-flex flex-column"
            style={{ width: "60%", zIndex: 1, borderRadius: "2px" }}
          >
            <p className="letter-spacing fs-3" style={{ color: "#FFF" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-90deg-down"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 14.854a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V3.5A2.5 2.5 0 0 1 6.5 1h8a.5.5 0 0 1 0 1h-8A1.5 1.5 0 0 0 5 3.5v9.793l3.146-3.147a.5.5 0 0 1 .708.708z"
                />
              </svg>{" "}
              Tudo que você aprenderá na
              <span className="text-primary"> Mentoria</span>
            </p>
            <div className="d-flex gap-3 flex-column">
              <div className="d-flex gap-3">
                <div
                  className=" box-format d-flex flex-column p-2 gap-1 w-50"
                  style={{ borderRadius: "4px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-code-slash"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
                  </svg>
                  <p
                    className="letter-spacing-plus fw-bold text-uppercase text-info"
                    style={{ fontSize: "14px", marginTop: "10px" }}
                  >
                    O que é Programação
                  </p>
                  <span style={{ fontSize: "14px" }}>
                    Programação é basicamente dizer ao computador o que fazer
                    através de códigos. É transformar ideias em realidade
                    digital, criando aplicativos, sites e muito mais.
                  </span>
                </div>
                <div
                  className=" box-format d-flex flex-column p-2 gap-1 w-50"
                  style={{
                    borderRadius: "4px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-braces"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6" />
                  </svg>
                  <p
                    className="letter-spacing-plus fw-bold text-uppercase text-warning"
                    style={{ fontSize: "14px", marginTop: "10px" }}
                  >
                    Por onde começar
                  </p>
                  <span style={{ fontSize: "14px" }}>
                    Vamos começar do ZERO na Programação. Não é necessário
                    conhecimento prévio. Estarei aqui para ensinar passo a
                    passo.
                  </span>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="box-format d-flex flex-column p-2 w-50"
                  style={{
                    borderRadius: "4px",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-gear"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
                    <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
                  </svg>
                  <p
                    className="letter-spacing-plus fw-bold text-uppercase"
                    style={{
                      color: "#F16165",
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  >
                    O que Estudar
                  </p>
                  <span style={{ fontSize: "14px" }}>
                    Para mandar bem na programação, você precisa aprender
                    lógica, algoritmos e escolher uma linguagem para começar.
                    Praticar com projetos e resolver problemas: te ensinarei
                    tudo isso.
                  </span>
                </div>
                <div
                  className=" box-format d-flex flex-column p-2 w-50"
                  style={{ borderRadius: "4px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    fill="currentColor"
                    className="bi bi-currency-dollar"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73z" />
                  </svg>
                  <p
                    className="letter-spacing-plus fw-bold text-uppercase"
                    style={{
                      color: "#00AC61",
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  >
                    Como trabalhar na área
                  </p>
                  <span style={{ fontSize: "14px" }}>
                    Pronto para ingressar na indústria que mais paga bem hoje em
                    dia? Vou orientá-lo sobre como iniciar e progredir em uma
                    carreira gratificante na área de programação.
                  </span>
                </div>
              </div>
              <a href="" className="w-25">
                Quero Fazer
              </a>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="d-flex flex-column">
            <p className="letter-spacing fs-3">
              Quais são as áreas existentes?
            </p>
          </div>
        </div>
        <div className="container">a</div>
      </main>
    </>
  );
};

export default Mentoria;
