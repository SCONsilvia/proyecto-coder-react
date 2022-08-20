import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { GenerateOrder } from "../GenerateOrder/GenerateOrder";
import FormView from "../FormView/FormView";

const Form = () =>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [purchaseCompleted, setpurchaseCompleted] = useState("");
    const [itemOutStock, setItemOutStock] = useState([]);

    const [buttonDisable, setButtonDisable] = useState(false);

    const {cart, getTotalAllProducts, clear, removeItem, modificarCantidadDelCarrito} = useContext(CartContext);
    const total = getTotalAllProducts();

    useEffect(() => {
        itemOutStock.forEach(prodOutStock => {
            if (prodOutStock.stock === 0){
                removeItem(prodOutStock.id);
            }else{
                modificarCantidadDelCarrito(prodOutStock.id, prodOutStock.stock);
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[itemOutStock]);

    const newOrder = (e) => {
        e.preventDefault();
        GenerateOrder(data);
        setButtonDisable(true);
    }

    const data = {
        name: name,
        setName : setName,
        email : email,
        setEmail : setEmail,
        phone : phone,
        setPhone : setPhone,
        purchaseCompleted: purchaseCompleted,
        setpurchaseCompleted : setpurchaseCompleted,
        itemOutStock : itemOutStock,
        setItemOutStock : setItemOutStock,
        funcForm : newOrder,
        cart : cart,
        getTotalAllProducts : getTotalAllProducts,
        clear : clear,
        removeItem : removeItem,
        modificarCantidadDelCarrito : modificarCantidadDelCarrito,
        total,
        buttonDisable, 
        setButtonDisable,
    }

    return(
        <FormView data = {data}/>
    )
}

export default Form;