import "./Navbar.css"//Importo el css

const navbar = () =>{
    return(
        <nav className = "navbar">
            <ul className = "navbar__lista">
                <li><a href="#" className = "navbar__lista__item">Inicio</a></li>
                <li><a href="#" className = "navbar__lista__item">Productos</a></li>
                <li><a href="#" className = "navbar__lista__item">Contacto</a></li>
            </ul>
        </nav>
    )
}

export default navbar//para exportar el navbar