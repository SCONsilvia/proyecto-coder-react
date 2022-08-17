import "./NavbarItem.css"
import { Link } from "react-router-dom";

const NavbarItem = ({id, description}) => {
    return(
        <li><Link to={`/category/${id}`} className = "navbar__lista__item">{description}</Link></li>      
    )
}

export default NavbarItem;