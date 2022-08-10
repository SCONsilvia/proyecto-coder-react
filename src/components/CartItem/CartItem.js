import "./CartItem.css"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom"

const CartItem = ({id, name, price, quantity}) =>{
    const navigate = useNavigate()
    const {removeItem} = useContext(CartContext);
    
    const a = (e) =>{
        e.stopPropagation();
        removeItem(id)
    }

    return(
        <li className="cart__ContainerItems__item" onClick={() => navigate(`/detail/${id}`)}>
            <h2 className="cart__ContainerItems__item__title">{name}</h2>
            <p className="cart__ContainerItems__item__info">Cantidad: {quantity}</p>
            <p className="cart__ContainerItems__item__info">Precio: ${price}</p>
            <p className="cart__ContainerItems__item__info">SubTotal: ${quantity * price}</p>
            <button className="cart__ContainerItems__item__buttonRemove" onClick={a}>X</button>
        </li>
    )
}

export default CartItem