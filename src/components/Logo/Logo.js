import "./Logo.css";
import { BsJoystick } from "react-icons/bs";
import {Link} from "react-router-dom";

const Logo = (() => {
    return(
        <Link to="/">
            <div className="logo">
                <BsJoystick className="logo__logo"/>
                <h1 className="logo__title">Game Store</h1>
            </div>
        </Link>
    )
})

export default Logo;