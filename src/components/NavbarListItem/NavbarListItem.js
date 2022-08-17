import { db } from "../../services/firebase";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import NavbarItem from "../../NavbarItem/NavbarItem.js";

const NavbarListItem = () => {
    const [categories, setCategoties] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, "categories");
        getDocs(collectionRef).then(response => {
            const category = response.docs.map(doc =>{
                return { id: doc.id, ...doc.data()}
            })
            setCategoties(category);
        }).catch(error => {
            console.log(error);
        })
    },[]);

    return(
        <>
            {categories.map(category => (
                <NavbarItem key = {category.id} {...category}/>
            ))}
        </>
    )

}

export default NavbarListItem;