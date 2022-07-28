import { getProduct } from "../../utils/asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const { productId } = useParams();

    useEffect(()=>{
        getProduct(productId).then(response =>{
            setProduct(response);
        }).catch(error => {
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