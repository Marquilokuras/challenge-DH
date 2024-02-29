import { useState, useEffect } from "react";

function Applicant() {
  const [applicant, setApplicant] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState("all");

  const seleccionarGenero = (genero) => {
    setGeneroSeleccionado(genero);
  };

  const solicitantesFiltrados = applicant.filter((result) => {
    return result.gender === generoSeleccionado;
  });

  useEffect(() => {
    fetch("http://localhost:8080/api/applicants")
      .then((response) => response.json())
      .then((data) => {
        setApplicant(data);
      });
  }, []);

  return (
    <>
      <section className="content aspirantes" id="candidate">
        <h2>Aspirantes</h2>
        <ul>
          <div className="container mt-4">
            <h4>Filtro por Género</h4>
            <div className="d-flex gap-2">
              <div>
                <h6>Hombre</h6>
                <button
                  className={`btn ${
                    generoSeleccionado === "Man"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                  onClick={() => seleccionarGenero("Man")}
                >
                  Seleccionar
                </button>
              </div>
              <div>
                <h6>Mujer</h6>
                <button
                  className={`btn ${
                    generoSeleccionado === "Woman"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                  onClick={() => seleccionarGenero("Woman")}
                >
                  Seleccionar
                </button>
              </div>
              <div>
                <h6>Otros</h6>
                <button
                  className={`btn ${
                    generoSeleccionado === "Other"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                  onClick={() => seleccionarGenero("Other")}
                >
                  Seleccionar
                </button>
              </div>
              <div>
                <h6>Todos</h6>
                <button
                  className={`btn ${
                    generoSeleccionado === "all"
                      ? "btn-primary"
                      : "btn-secondary"
                  }`}
                  onClick={() => seleccionarGenero("all")}
                >
                  Seleccionar
                </button>
              </div>
            </div>
          </div>

          <article className="person-boxes">
            {solicitantesFiltrados.map((result, i) => (
              <div
                className="person-box shadow p-3 mb-5 bg-body-tertiary rounded"
                key={`div-1-${i}`}
              >
                <div className="box-avatar" key={`div-avatar-${i}`}>
                        <img
                          src={`/img/${result.image}`}
                          alt={`img-${result.name}`}
                          key={`img-${i}`}
                        />
                      </div>
                <div className="box-bio" key={`div-3-${i}`}>
                  <h2 className="bio-name" key={`div-2-${i}`}>
                    {result.name} {result.lastname}
                  </h2>
                  {result.professions.map((res, j) => (
                    <p className="bio-position" key={`div-2-${j}`}>
                      {res.profession}
                    </p>
                  ))}
                </div>
                {/* <h3 key={`name-${i}`}>{result.gender} </h3> */}
              </div>
            ))}
          </article>
        </ul>

        <div>
          {(() => {
            if (generoSeleccionado == false || generoSeleccionado == "all") {
              return (
                <article className="person-boxes">
                  {applicant.map((result, i) => (
                    <div
                      className="person-box shadow p-3 mb-5 bg-body-tertiary rounded"
                      key={`div-${i}`}
                    >
                      <div className="box-avatar" key={`div-avatar-${i}`}>
                        <img
                          src={`/img/${result.image}`}
                          alt={`img-${result.name}`}
                          key={`img-${i}`}
                        />
                      </div>
                      <div className="box-bio" key={`div-bio-${i}`}>
                        <h2 className="bio-name" key={`name-${i}`}>
                          {result.name} {result.lastname}
                        </h2>
                        {result.professions.map((res, j) => (
                          <p className="bio-position" key={`profe-${j}`}>
                            {res.profession}
                          </p>
                        ))}
                      </div>
                <h3 key={`name-${i}`}>{result.gender} </h3>

                      <div className="box-actions" key={`div-actions-${i}`}>
                        <button key={`but-1-${i}`}>
                          <i className="bi bi-star" key={`icon-1-${i}`}></i>
                        </button>
                        <button key={`but-2-${i}`}>
                          <i className="bi bi-chat" key={`icon-2-${i}`}></i>
                        </button>
                        <button key={`but-3-${i}`}>
                          <i className="bi bi-envelope" key={`icon-3-${i}`}></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </article>
              );
            }
            return null;
          })()}
        </div>
      </section>
    </>
  );
}

export default Applicant;
