import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useState, useEffect} from "react"
import { getProducts } from "../../utils/asyncMock"


const ItemListContainer = ({greeting, }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getProducts().then(response => {
            setProducts(response)
        }).catch(error =>{
            console.log(error);
        }).finally(() =>{
            setLoading(false);
        })
    },[]);

    if(loading) {
        return <h1>Cargando productos...</h1>
    }

    return(
        <section>
            <h1>{greeting}</h1>
            <ItemList products ={products}/>
        </section>
    )
}

export default ItemListContainer