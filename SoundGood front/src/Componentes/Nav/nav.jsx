import { Logo } from "../../logo/logo"
import './nav.css'


export const Nav = () => {
    return (
        <nav >
            <div className="navbar">
                <div className="nav-logo">
                    <Logo />
                </div>
                <div className="nav-buscador">
                    <input type="text" placeholder="Buscar..." />
                    <button type="button">Buscar</button>
                </div>
                <div className="nav-links">
                    <a href="">Biblioteca</a>
                    <a href="">Cuenta</a>
                </div>
            </div>
        </nav>
    )
}