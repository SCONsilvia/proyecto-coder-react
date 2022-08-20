import "./Navbar.css";//Importo el css
import NavbarListItem from "../NavbarListContainer/NavbarListContainer";

const Navbar = () =>{
    return(
        <nav className = "navbar">
            <ul className = "navbar__lista">
                <NavbarListItem />
            </ul>
        </nav>
    )
}

export default Navbar;//para exportar el navbar