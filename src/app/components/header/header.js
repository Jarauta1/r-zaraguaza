import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../../assets/Graphic1.png"

function Header(props) {

    if (props.log === true) {
        return (<>
            <section className="header-section">
                <div className="header">
                    <Link to="/" className="logo">
                        <img src={logo} height="30" alt="RZaraguaza" />
                    </Link>
                    <input className="menu-header-btn" type="checkbox" id="menu-header-btn" />
                    <label className="menu-header-icon" htmlFor="menu-header-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu-header">
                        <li>
                            <Link className="header-users" to="/users"><a>Jugadores</a></Link>
                        </li>
                        <li>
                            <Link className="header-logout" to="/logout"><a>Partidos</a></Link>
                        </li>
                        <li>
                            <Link className="header-logout" to="/logout"><a>Clasificación</a></Link>
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
                    <input className="menu-header-btn" type="checkbox" id="menu-header-btn" />
                    <label className="menu-header-icon" htmlFor="menu-header-btn">
                        <span className="navicon"></span>
                    </label>
                    <ul className="menu-header">
                        <li>
                            <Link className="header-login" to={{ pathname: "/logIn" }}><a>Plantilla</a></Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}><a>Resultados</a></Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}><a>Clasificación</a></Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}><a>Estadisticas</a></Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}><a>Historico</a></Link>
                        </li>
                        <li>
                            <Link className="header-signup" to={{ pathname: "signUp" }}><a>Jugadores del mes</a></Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>);
    }
}

export default Header;