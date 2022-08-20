import { listProductsAddedFromFirestore } from "../../services/firebase/firestore";
import { cambiosParaFireStore } from "../../services/firebase/firestore";

export const GenerateOrder = async (data) => {
    const {name,email,phone,setpurchaseCompleted, cart, total, clear,setItemOutStock} = data;
    
    const objOrder = {
        user: {
            name, email, phone
        },
        items : cart,
        total
    }
    
    const ids = objOrder.items.map(prod => prod.id);

    const productsAddedFromFirestore = await listProductsAddedFromFirestore(ids);
    const {docs} = productsAddedFromFirestore;

    const outOfStock = [];
    const batch = new cambiosParaFireStore();

    docs.forEach(doc => {
        const dataDoc = doc.data();
        const productAdded = objOrder.items.find(prod => prod.id === doc.id);
        const prodQuantity = productAdded.quantity;
        const stockDb = dataDoc.stock;
            
        if(stockDb >= prodQuantity){
            batch.actualizarBatch(doc.ref, {stock : stockDb - prodQuantity});
        }else{
            outOfStock.push({id:doc.id, ...dataDoc});
        }
    })

    if (outOfStock.length === 0) {
        const idDeOrden = await batch.actualizarBatch2(objOrder);
        clear();
        setpurchaseCompleted(idDeOrden);
    }else{
        setItemOutStock(outOfStock);
    }
    
}
