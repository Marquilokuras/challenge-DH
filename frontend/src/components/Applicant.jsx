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
        <h2 className="text-center">Aspirantes</h2>
          <div className="container mt-4">
            <h4>Filtro por Género</h4>
            <div className="d-flex flex-wrap gap-2">
              <div className="mb-2">
                <button
                  className={`btn ${generoSeleccionado === "Man" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => seleccionarGenero("Man")}
                >
                  Hombre
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={`btn ${generoSeleccionado === "Woman" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => seleccionarGenero("Woman")}
                >
                  Mujer
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={`btn ${generoSeleccionado === "Other" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => seleccionarGenero("Other")}
                >
                  Otros
                </button>
              </div>
              <div className="mb-2">
                <button
                  className={`btn ${generoSeleccionado === "all" ? "btn-primary" : "btn-secondary"}`}
                  onClick={() => seleccionarGenero("all")}
                >
                  Todos
                </button>
              </div>
            </div>
          </div>

          <article className="person-boxes">
            {solicitantesFiltrados.map((result, i) => (
              <div className="mt-3 person-box shadow p-3 mb-5 bg-body-tertiary rounded" key={`div-1-${i}`}>
                <div className="box-avatar" key={`div-avatar-${i}`}>
                  <img src={`/img/${result.image}`} alt={`img-${result.name}`} key={`img-${i}`}/>
                </div>
                <div className="box-bio" key={`div-3-${i}`}>
                  <h2 className="bio-name" key={`div-2-${i}`}>
                    {result.name} {result.lastname}
                  </h2>
                  <h2 className="bio-position mt-2" key={`div-2-${i}`}>
                    Linkedin: {result.urlLinkedin}
                  </h2>
                  <h2 className="bio-position  mt-2" key={`div-2-${i}`}>
                    Teléfono: {result.phone}
                  </h2>
                  <div className="bio-position">
                    {result.professions.map((res, j) => (
                      <h4 className="title-profession" key={`div-2-${j}`}>
                        {res.profession}
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </article>

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
                      <div className="box-bio" key={`div-3-${i}`}>
                        <h2 className="bio-name" key={`div-2-${i}`}>
                          {result.name} {result.lastname}
                        </h2>
                        <h2 className="bio-position mt-2" key={`div-2-${i}`}>
                          Linkedin: {result.urlLinkedin}
                        </h2>
                        <h2 className="bio-position  mt-2" key={`div-2-${i}`}>
                          Teléfono: {result.phone}
                        </h2>
                        <div className="bio-position">
                          {result.professions.map((res, j) => (
                            <h4 className="title-profession" key={`div-2-${j}`}>
                              {res.profession}
                            </h4>
                          ))}
                        </div>
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
