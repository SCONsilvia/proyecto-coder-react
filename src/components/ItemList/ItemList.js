import Item from "../Item/Item"
import "./ItemList.css"

const ItemList = ({products}) => {
    return(
        <div className = "itemList">
            {products.map(product => (
                <Item product = {product} />
            ))}
        </div>
    )
}

export default ItemList