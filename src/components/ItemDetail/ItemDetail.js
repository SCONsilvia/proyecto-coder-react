import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css" ;
import { useState, useContext} from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, price, description, category, img, stock,ann}) => {
    const [quantity, setQuantity] = useState(0);
    const {addItem} = useContext(CartContext);
    const {getProductQuantity} = useContext(CartContext);

    const quantityAdded = getProductQuantity(id);
   
    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} productos`);
        setQuantity(cantidad);
        addItem({id,name,price,quantity:cantidad});
    };

    return(
        <article key={id} className="productDetail">
            <div className= "productDetail__ContainerImg">
                <img className= "productDetail__img" src = {img} alt={"imagen de " + name}></img>
            </div>
            <div className= "productDetail__ContainerInfo">
                <h2 className= "productDetail__ContainerInfo__name">{name}</h2>
                <p className= "productDetail__ContainerInfo__category">{category}</p>
                <p className= "productDetail__ContainerInfo__description">Descripcion: {description}</p>
                <p className= "productDetail__ContainerInfo__price">US${price}</p>
                { quantity > 0 ? <Link to="/cart"><button className="cart__button">Terminar Compra</button></Link> : <ItemCount initial={quantityAdded} stock={stock} onAdd={onAdd}/>}
            </div>
        </article>
    )
}

export default ItemDetail;