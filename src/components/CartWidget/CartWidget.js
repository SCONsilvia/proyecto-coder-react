import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartWidget = () => {
    const {getTotal} = useContext(CartContext)

    const total = getTotal();

    return (
        <div className="cardWidget">
            <FaShoppingCart className="cardWidget__icon"/>
            <p>{total}</p>
        </div>
    )
}

export default CartWidget
