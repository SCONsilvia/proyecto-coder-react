import "./Header.css"
import Navbar from '../Navbar/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from "../Logo/Logo";

const Header = () => {
    return (
        <header className="header">
            <Logo />
            <Navbar />
            <CartWidget/>
        </header>
    )
}

export default Header


