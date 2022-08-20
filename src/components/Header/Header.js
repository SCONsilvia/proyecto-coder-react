import "./Header.css";
import Navbar from '../Navbar/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {useContext} from "react";

const Header = () => {
    const {cart} = useContext(CartContext);

    return (
        <header className="header">
            <Logo />
            <Navbar />
            {cart.length > 0 ? <Link to={"/cart"} ><CartWidget/></Link> : null}
        </header>
    )
}

export default Header


