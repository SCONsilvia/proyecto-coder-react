import "./Navbar.css"//Importo el css
import {Link} from "react-router-dom";

const navbar = () =>{
    return(
        <nav className = "navbar">
            <ul className = "navbar__lista">
                <li><Link to="/category/Ps4" className = "navbar__lista__item">Ps4</Link></li>
                <li><Link to="/category/Nintendo switch" className = "navbar__lista__item">Nintendo switch</Link></li>
                <li><Link to="/category/Xbox360" className = "navbar__lista__item">Xbox360</Link></li>
            </ul>
        </nav>
    )
}

export default navbar//para exportar el navbar