import * as Icon from "react-bootstrap-icons";

function Contact() {
  return (
    <>
      <div className="contact container">
        <section className="mb-4">
          <h2 className="h1-responsive font-weight-bold text-center my-4">
            Contactate con Nosotros
          </h2>
          <p className="text-center w-responsive mx-auto mb-5">
            ¿Tiene usted alguna pregunta? <br />
            Por favor no dude en contactarnos directamente.
            <br />
            Nuestro equipo se comunicará con usted en cuestión de horas para
            ayudarlo.
          </p>

          <div className="row">
            <div className="col-md-9 mb-md-0 mb-5">
              <form id="contact-form" name="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="name">Nombre y Apellido</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="md-form mb-0">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <div className="md-form mb-0">
                      <label htmlFor="subject">Titulo</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <div className="md-form">
                      <label htmlFor="message">Mensaje</label>
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        rows="2"
                        className="form-control md-textarea"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-center text-md-left mt-3">
                <a
                  href="mailto:rh@digitalhouse.com"
                  className="btn btn-primary"
                >
                  Enviar
                </a>
              </div>
              <div className="status"></div>
            </div>

            <div className="col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fas fa-map-marker-alt fa-2x"></i>
                  <Icon.GlobeAmericas className="mt-2 fa-2x" />
                  <p>Av. Monroe 860, Buenos Aires, Argentina</p>
                </li>
                <li>
                  <Icon.PhoneVibrateFill className="mt-2 fa-2x" />
                  <p>+ 0111552637400</p>
                </li>
                <li>
                  <Icon.Mailbox2Flag className="mt-2 fa-2x" />
                  <a
                    href="http://digitalhouse.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p>http://digitalhouse.com/</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
