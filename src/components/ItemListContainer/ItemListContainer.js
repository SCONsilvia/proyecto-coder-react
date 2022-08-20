import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync"
import { getProducts } from "../../services/firebase/firestore"

const ItemListContainer = ({greeting }) => {
    const {categoryId} = useParams();

    const { loading, data, error } = useAsync((()=>getProducts("products", categoryId)),[categoryId]);
    

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    if(error){
        return <p>Acaba de ocurrir un error</p>
    }

    if(data >= 0){
        return <p>No hay productos para mostar</p>
    }

    return(
        <section>
            <h1>{greeting}</h1>
            <ItemList products ={data}/>
        </section>
    )
}

export default ItemListContainer