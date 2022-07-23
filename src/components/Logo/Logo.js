import "./Logo.css";
import { BsJoystick } from "react-icons/bs";

const Logo = (() => {
    return(
        <div className="logo">
            <BsJoystick className="logo__logo"/>
            <h1 className="logo__title">Game Store</h1>
        </div>
    )
})

export default Logo;