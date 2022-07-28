import "./Item.css"
import {Link} from "react-router-dom"

const Item = ({product}) =>{
    const {id, name, price, img, stock} = product;

    return(
        <Link to={`/detail/${id}`}>
            <article className="item">
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