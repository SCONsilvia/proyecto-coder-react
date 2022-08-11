import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../services/firebase/index"


const ItemListContainer = ({greeting }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams();
    
    useEffect(() => {
        const collectionRef = !categoryId ? collection(db, "products") : query(collection(db, "products"), where("category", "==", categoryId))

        getDocs(collectionRef).then(reponse => {
            const products = reponse.docs.map(doc => {
                const values = doc.data()
                return { id: doc.id , ...values}
            })
            setProducts(products);
        }).catch(error => {
            console.log(error);
        }).finally(() => {
            setLoading(false);
        })

    },[categoryId]);

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