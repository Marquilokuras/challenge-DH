import { Link } from "react-router-dom";
import "../assets/css/menu.css";

function Menu() {
    return(
        <>
            <header className="menu-wrap">
			<figure className="user">
				<div className="user-avatar">
					<img src="/img/logo-dh.png" alt="Logo Digital House"/>
				</div>
				<figcaption>
					Digital House
				</figcaption>
			</figure>
			<nav>
				<section className="menu">
					<h3>Opciones</h3>
					<ul>
						<li>
							<Link to="#">
								<i className="bi bi-building" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
								- Empresas
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bi bi-person" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
								- Aspirantes
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bi bi-list-check" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
								- Profesiones
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bi bi-person-vcard" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
								- Postulate aquí
							</Link>
						</li>
						<li>
							<Link to="#">
								<i className="bi bi-chat-left-text" style={{fontSize: "1.2rem", color: "cornflowerblue"}}></i>
								- Contacto
							</Link>
						</li>
					</ul>
				</section>
			</nav>
		</header>
        </>
    )
}

export default Menu;