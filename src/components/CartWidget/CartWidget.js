import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";



const CartWidget = () => {
    return (
        <div className="cardWidget">
            <FaShoppingCart className="cardWidget__icon"/>
            <p>0</p>
        </div>
    )
}

export default CartWidget
