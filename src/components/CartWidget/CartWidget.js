import "./CartWidget.css"
import { FaShoppingCart } from "react-icons/fa";
import { useState } from 'react'



const CartWidget = () => {
    const [inputw, setInputw] = useState()
    const [input, setInput] = useState()

    const [resultado, setResultado] = useState(0);

    const sumar = () =>{
        setInput(11);
        console.log(input);
        setResultado(parseInt(input) + parseInt(inputw));
    }
    return (
        <div className="cardWidget">
            <FaShoppingCart className="cardWidget__icon"/>
            <p>0</p>
            
            <input type="text" onChange={event => setInputw(event.target.value)}></input>
            <input type="text" onChange={event => setInput(event.target.value)}></input>
            <button onClick={sumar}>Sumar</button>
            <p>{resultado}</p>
        </div>
    )
}

export default CartWidget
