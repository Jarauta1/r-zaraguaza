import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/Graphic1.png"
import copas_header from "../../../assets/copas_header.png"

function Header(props) {

    if (props.log === true) {
        return (<>
            <section className="header-section">
                <div className="header">
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="RZaraguaza" />
                    </Link>
                    <img src={copas_header} height="30" alt="Titulos"/>
                    <input className="menu-header-btn" type="checkbox" id="menu-header-btn" />
                    <label className="menu-header-icon" htmlFor="menu-header-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu-header">
                        <li>
                            <Link className="header-users" to="/users">Jugadores</Link>
                        </li>
                        <li>
                            <Link className="header-logout" to="/logout">Partidos</Link>
                        </li>
                        <li>
                            <Link className="header-logout" to="/logout">Clasificación</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>)
    } else {
        return (<>
            <section className="header-section">
                <div className="header">
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="RZaraguaza" />
                    </Link>
                    <img className="logo-copa" src={copas_header} height="75px" alt="Titulos"/>
                    <input className="menu-header-btn" type="checkbox" id="menu-header-btn" />
                    <label className="menu-header-icon" htmlFor="menu-header-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu-header">
                        <li>
                            <Link className="header-login" to={{ pathname: "/players" }}>Plantilla</Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}>Resultados</Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "classification" }}>Clasificación</Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}>Estadisticas</Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}>Historico</Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}>Jugadores del mes</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>);
    }
}

export default Header;