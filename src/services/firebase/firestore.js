import { getDocs, collection, query, where, doc, getDoc, writeBatch, addDoc, documentId } from "firebase/firestore"
import { db } from "../../services/firebase/index"

export const getProducts = (tableName, categoryId) => {
    const collectionRef = !categoryId ? collection(db, tableName) : query(collection(db, tableName), where("category", "==", categoryId))

    return getDocs(collectionRef).then(reponse => {
        const products = reponse.docs.map(doc => {
            const values = doc.data()
            return { id: doc.id , ...values}
        })
        return products;
    }).catch(error => {
        return error;
    })
}

export const getProduct = (productId) => {
    const colletionRef = doc(db, "products", productId);
    return getDoc(colletionRef).then(response =>{
        const product = {id:response.id, ...response.data()}
        return product;
    }).catch(error => {
        return error;
    })
}

export const listProductsAddedFromFirestore = (ids) => {
    return getDocs(query(collection(db, "products"), where(documentId(), "in" , ids))).then(reponse =>{
        return reponse;
    }).catch(error => {
        return error;
    })
}

export class cambiosParaFireStore{
    constructor() {
       
        this.batch = writeBatch(db);
    }   

    actualizarBatch(ref, modificacion){
        this.batch.update(ref, modificacion)
    }

    actualizarBatch2(objOrder){
        return addDoc(collection(db, "orders"), objOrder).then(reponse =>{
            this.batch.commit();
            return reponse.id;
        })
    }

    /* static cambiosParaFireStore(ids){
        return getDocs(query(collection(db, "products"), where(documentId(), "in" , ids))).then(reponse =>{
            return reponse;
        }).catch(error => {
            return error;
        })
    } */
}

/* export const generateOrder = (data) => {
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
    
} */