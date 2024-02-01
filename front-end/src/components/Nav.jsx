import { Link } from "react-router-dom";
import "../assets/css/nav.css";

function Nav() {
    return (
        <>
            <section className="search-wrap">
                <div className="search">
                    <label for="search">
                        <i className="bi bi-search" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
                        <input type="text" id="search"/>
                    </label>
                </div>

                <div className="user-actions">
                    <button>
                        <Link to="#">
                            <i className="bi bi-person-add" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
                        </Link>
                    </button>
                    <button>
                        <Link to="#">
                            <i className="bi bi-person" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
                        </Link>
                    </button>
                    <button>
                        <Link to="#">
                            <i className="bi bi-box-arrow-right" style={{fontSize: "1.5rem", color: "cornflowerblue"}}></i>
                        </Link>
                    </button>
                </div>
            </section>
        </>
    )
}

export default Nav;