import "./Cart.css"
import CartItem from "../CartItem/CartItem"
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { Link } from "react-router-dom"

const Cart = () => {
    const {cart, getTotalAllProducts, clear} = useContext(CartContext);
    const total = getTotalAllProducts();

    console.log(cart);
    return(
        <section className="cart">
            <p className={"cart__text " + "cart__title"}>Carrito</p>
            {!cart.length > 0 && 
                <>
                    <p>El carrito esta vacio</p>

                    <Link to="/"><button className="cart__button">Ir al inicio</button></Link>
                </>
            }
            {cart.length > 0 && 
                <>
                    <ul className="cart__ContainerItems">
                        {cart.map(item => (<CartItem key={item.id} {...item}/>))}
                    </ul>
                    <p className="cart__text">Total: {total}</p>
                    <button className="cart__button" onClick={() => clear()}>Borrar Todo</button>
                </>
            }
        </section>
    )
}

export default Cart