import imagenFondo from "/img/404-NotFound.jpg";
import {Link} from "react-router-dom";

function NotFound() {
  return (
    <>
    <div className="text-center">
      <img
        className="img-fluid px-3 px-sm-4 mt-3 mb-4"
        style={{ width: 40 + "rem" }}
        src={imagenFondo}
        alt="Error 404"
      />
      <Link to="/" style={{ display: "block", textDecoration: "none" }}>
        <button
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            marginTop: "20px",
          }}
        >
          Volver
        </button>
      </Link>
    </div>
    </>
  );
}

export default NotFound;
