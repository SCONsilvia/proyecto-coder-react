import { getDocs, collection, query, where, doc, getDoc, writeBatch, addDoc, documentId } from "firebase/firestore";
import { db } from "../../services/firebase/index";
import { createAdaptedProductFromFirestore, createAdaptedCategoryFromFirestore } from "../../adapter/adapter";

export const getProducts = (tableName, categoryId) => {
    const collectionRef = !categoryId ? collection(db, tableName) : query(collection(db, tableName), where("category", "==", categoryId));
    const adapter = tableName === "categories" ? createAdaptedCategoryFromFirestore : createAdaptedProductFromFirestore;

    return getDocs(collectionRef).then(reponse => {
        const products = reponse.docs.map(doc => {
            return adapter(doc);
        })
        return products;
    }).catch(error => {
        return error;
    })
}

export const getProduct = (productId) => {
    const colletionRef = doc(db, "products", productId);
    const adapter = createAdaptedProductFromFirestore;
    return getDoc(colletionRef).then(doc =>{
        return adapter(doc);
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

export class changesForFirestore{
    constructor() {
       
        this.batch = writeBatch(db);
    }   

    loadDataToSave(ref, modificacion){
        this.batch.update(ref, modificacion);
    }

    updateBatch(objOrder){
        return addDoc(collection(db, "orders"), objOrder).then(reponse =>{
            this.batch.commit();
            return reponse.id;
        })
    }
}