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
}