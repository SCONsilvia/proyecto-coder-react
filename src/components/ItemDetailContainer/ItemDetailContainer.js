import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { getDoc, doc } from "firebase/firestore"
import { db } from "../../services/firebase/index"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(()=>{
        const colletionRef = doc(db, "products", productId)
        
        getDoc(colletionRef).then(response =>{
            const product = {id:response.id, ...response.data()}
            setProduct(product);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })
    },[productId]);

    return(
        <div>
            {product.hasOwnProperty("id")? <ItemDetail {...product}/> : (loading ? <p>Cargando Detalles</p> : <p>No se pudo cargar el detalle del producto</p>)}
        </div>
    )
}

export default ItemDetailContainer