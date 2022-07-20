import "./ItemCount.css"
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(1);
    const [disabledButtonDecrease, setDisabledButtonDecrease] = useState(true);
    const [disabledButtonIncrease, setDisabledButtonIncrease] = useState(false);

    const add = (sum) => {
        setCount(count+sum);

        if((count + sum) === stock){
            setDisabledButtonIncrease(true);
        }else if((count + sum)=== initial){
            setDisabledButtonDecrease(true);
        }else{
            setDisabledButtonIncrease(false);
            setDisabledButtonDecrease(false);
        }
    }

    
    return(
        <div className="itemContentCount">
            <div className="itemCount">
                <button className="itemCount__button" onClick={() => add(-1)} disabled={disabledButtonDecrease}><FaAngleLeft className="itemCount__button__icon"/></button>
                <p className="itemCount__count">{count}</p>
                <button className="itemCount__button" onClick={() => add(1)} disabled={disabledButtonIncrease}><FaAngleRight className="itemCount__button__icon"/></button>
            </div>
            <button className="buttonAdd" onClick={() => onAdd(count)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount;