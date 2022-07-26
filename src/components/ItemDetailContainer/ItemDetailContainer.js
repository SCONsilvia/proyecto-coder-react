import { getProduct } from "../../asyncMock";
import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getProduct("2").then(response =>{
            setProduct(response);
        }).catch(error => {
            setLoading(false);
        })
    },[]);

    return(
        <div>
            {product.hasOwnProperty("id")? <ItemDetail product = {product}/> : (loading ? <p>Cargando Detalles</p> : <p>No se pudo cargar el detalle del producto</p>)}
        </div>
    )
}

export default ItemDetailContainer