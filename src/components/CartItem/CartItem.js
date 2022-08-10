import "./CartItem.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const CartItem = ({id, name, price, quantity}) =>{
    const {removeItem} = useContext(CartContext);
    
    return(
        <Link to={`/detail/${id}`}>
            <li className="cart__ContainerItems__item">
                <h2 className="cart__ContainerItems__item__title">{name}</h2>
                <p className="cart__ContainerItems__item__info">Cantidad: {quantity}</p>
                <p className="cart__ContainerItems__item__info">Precio: ${price}</p>
                <p className="cart__ContainerItems__item__info">SubTotal: ${quantity * price}</p>
                <button className="cart__ContainerItems__item__buttonRemove" onClick={() => removeItem(id)}>X</button>
            </li>
        </Link>
    )
}

export default CartItem