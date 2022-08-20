import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"
import { useAsync } from "../../hooks/useAsync";
import { getProduct } from "../../services/firebase/firestore";

const ItemDetailContainer = () => {
    const { productId } = useParams();

    const {data, error, loading} = useAsync((() => getProduct(productId)),[productId]);

    if(error){
        return <p>Acaba de ocurrir un error</p>
    }

    return(
        <div>
            {data && data.hasOwnProperty("name")? <ItemDetail {...data}/> : (loading ? <p>Cargando Detalles</p> : <p>No se pudo cargar el detalle del producto</p>)}
        </div>
    )
}

export default ItemDetailContainer