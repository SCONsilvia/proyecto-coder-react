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
        <Link to={`/detail/${id}`}>
            <article className="item">
                {heartActive ? <FaHeart onClick={active}/> : <FaRegHeart onClick={active}/>}
                <div className="item__imgContainer">
                    <img className="item__imgContainer__img" alt={"Imagen de " + name} src={img}/>
                </div>
                <div className="item__info">
                    <h2 className="item__info__title" >{name}</h2>
                    <p className="item__info__price">US${price}</p>
                </div>
                <div className="item__containerStock">
                    <p className="item__containerStock__stock">Stock {stock}</p>
                </div>
            </article>
        </Link>
    )
}

export default Item