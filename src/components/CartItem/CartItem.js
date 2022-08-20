import "./CartItem.css";
import { useNavigate } from "react-router-dom";

const CartItem = ({id, name, price, quantity, removeItem}) =>{
    const navigate = useNavigate();
    
    const remove1Item = (e) =>{
        e.stopPropagation();
        removeItem(id);
    }

    return(
        <li className="cart__ContainerItems__item" onClick={() => navigate(`/detail/${id}`)}>
            <h2 className="cart__ContainerItems__item__title">{name}</h2>
            <p className="cart__ContainerItems__item__info">Cantidad: {quantity}</p>
            <p className="cart__ContainerItems__item__info">Precio: ${price}</p>
            <p className="cart__ContainerItems__item__info">SubTotal: ${quantity * price}</p>
            <button className="cart__ContainerItems__item__buttonRemove" onClick={remove1Item}>X</button>
        </li>
    )
}

export default CartItem;