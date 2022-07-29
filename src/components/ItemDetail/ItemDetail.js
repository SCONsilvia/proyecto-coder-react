import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({id, name, price, description, category, img, stock}) => {
    console.log(img);

    const onAdd = (cantidad) => {
        console.log(`Agregaste ${cantidad} productos`);
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
                <ItemCount initial={1} stock={stock} onAdd={onAdd}/>
            </div>
        </article>
    )
}

export default ItemDetail