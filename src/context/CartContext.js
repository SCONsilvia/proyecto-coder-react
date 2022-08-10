import { createContext, useState } from "react"

export const CartContext = createContext();

export const CartContextProvide = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = (id) => {
        return (cart.some((element) => element.id === id))
    }

    const removeItem = (id) => {
        const cartItemRemove = cart.filter(element => element.id !== id);
        setCart(cartItemRemove);
    }

    const clear = () => {
        setCart([]);
    }

    const getTotalItem = () => {
        let accu = 0;
        cart.forEach(element => { accu += element.quantity});

        return accu;
    }

    const addItem = (newItem) => {
        if(!isInCart(newItem.id)){
            setCart([...cart,newItem]);
        }else{
            const cartUpdated = cart.map(element => {
                if(element.id === newItem.id){
                    const productUpdated = {...element, quantity:newItem.quantity}
                    
                    return productUpdated
                }else{
                    return element;
                }
            })

            setCart(cartUpdated)
        }
    }

    const getProductQuantity = (id) => {
        const product = cart.find((element) => element.id === id);

        return product?.quantity
    }

    const getTotalAllProducts = () => {
        let accu = 0;
        cart.forEach(element => { accu += element.quantity * element.price});

        return accu;
    }    

    return(
        <CartContext.Provider value={{cart, addItem, getProductQuantity,getTotalItem, getTotalAllProducts, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}