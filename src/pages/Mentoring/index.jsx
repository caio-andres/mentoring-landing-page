import "./mentoring.css";

function Mentoria() {
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
          </div>
        </div>

        <div className="container gap-5">
          <div
            className="d-flex flex-column gap-3"
            style={{ width: "60%", zIndex: 1 }}
          >
            <div className="d-flex gap-3">
              <div className="box-format d-flex flex-column p-2 border gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                </svg>
                <span className="fs-5 text-warning letter-spacing">
                  O que é Programação?
                </span>
                <span style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officia nostrum, similique non consectetur ipsa
                  vitae nemo vel animi a laboriosam, cupiditate dignissimos
                  aliquid, obcaecati rerum nihil voluptatum commodi aliquam.
                </span>
              </div>
              <div className="box-format d-flex flex-column p-2 bg-dark border gap-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                </svg>
                <span className="fs-5 text-warning letter-spacing">
                  O que é Programação?
                </span>
                <span style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officia nostrum, similique non consectetur ipsa
                  vitae nemo vel animi a laboriosam, cupiditate dignissimos
                  aliquid, obcaecati rerum nihil voluptatum commodi aliquam.
                </span>
              </div>
            </div>
            <div className="d-flex gap-3">
              <div className="box-format d-flex flex-column p-2 border bg-dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                </svg>
                <span className="fs-5 text-warning letter-spacing">
                  O que é Programação?
                </span>
                <span style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officia nostrum, similique non consectetur ipsa
                  vitae nemo vel animi a laboriosam, cupiditate dignissimos
                  aliquid, obcaecati rerum nihil voluptatum commodi aliquam.
                </span>
              </div>
              <div className="box-format d-flex flex-column p-2 border">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-code"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8z" />
                </svg>
                <span className="fs-5 text-warning letter-spacing">
                  O que é Programação?
                </span>
                <span style={{ fontSize: "14px" }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur officia nostrum, similique non consectetur ipsa
                  vitae nemo vel animi a laboriosam, cupiditate dignissimos
                  aliquid, obcaecati rerum nihil voluptatum commodi aliquam.
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column gap-5" style={{ width: "40%" }}>
            <div>
              <p className="letter-spacing fs-1" style={{ color: "#FFF" }}>
                Tudo que você aprenderá <br />
                na <span className="text-primary">Mentoria</span>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                />
              </svg>
            </div>
            <a
              className="link-btn p-4 px-5 py-3 text-center fw-bold letter-spacing w-50"
              href=""
              style={{ fontSize: "13px" }}
            >
              COMEÇAR AGORA
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export default Mentoria;
