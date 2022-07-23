import "./Item.css"

const Item = ({product}) =>{
    const {id, name, price, img, stock} = product;

    return(
        <article className="item" key={id} onClick={() => alert("mostrando "+name)}>
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
    )
}

export default Item