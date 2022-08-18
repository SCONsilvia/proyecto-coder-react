import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { db } from "../../services/firebase";

export const GenerateOrder = (data) => {
    const {name,email,phone,setpurchaseCompleted, cart, total, clear,setItemOutStock} = data;
    
    const objOrder = {
        user: {
            name, email, phone
        },
        items : cart,
        total
    }
    
    const ids = cart.map(prod => prod.id);
    
    getDocs(query(collection(db, "products"), where(documentId(), "in" , ids))).then(reponse =>{
        const productsAddedFromFirestote = reponse;
        const {docs} = productsAddedFromFirestote;

        const outOfStock = [];
        const batch = writeBatch(db);

        docs.forEach(doc => {
            const dataDoc = doc.data();
            const productAdded = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productAdded.quantity;
            const stockDb = dataDoc.stock;
            
            if(stockDb >= prodQuantity){
                batch.update(doc.ref, {stock : stockDb - prodQuantity})
            }else{
                outOfStock.push({id:doc.id, ...dataDoc});
            }
        })

        if (outOfStock.length === 0) {
            addDoc(collection(db, "orders"), objOrder).then(reponse =>{
                batch.commit();
                console.log(reponse.id);
                clear();
                setpurchaseCompleted(reponse.id);
            })
        }else{
            setItemOutStock(outOfStock);
        }
    })
    
}
