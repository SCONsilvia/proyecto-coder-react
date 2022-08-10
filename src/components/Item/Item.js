import "./Item.css"
import {Link} from "react-router-dom"
import { useState } from "react"
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Item = ({product}) =>{
    const {id, name, price, img, stock} = product;
    const [heartActive, setHeartActive] = useState(false);

    const active = (e) =>{
        e.stopPropagation();//la propagacion hacia sus acentros detenela
        setHeartActive(heartActive? false : true);
    }

    return(
        /* <Link to={`/detail/${id}`}> */
        <button onClick={() => console.log("hola")} >
            <article className="item">
                {heartActive ? <FaHeart onClick={active}/> : <FaRegHeart onClick={active}/>}
                
            </article>
        </button>
        /* </Link> */
    )
}

export default Item