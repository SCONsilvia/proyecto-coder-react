import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"

const CartList = () => {
    const {cart, removeItem} = useContext(CartContext);

    return (
        <>
            {cart.map(item => (<CartItem key={item.id} removeItem={removeItem} {...item}/>))}
        </>
    )
}

export default CartList;