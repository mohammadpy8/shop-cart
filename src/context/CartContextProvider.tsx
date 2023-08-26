import React, { createContext, useEffect, useState } from 'react';

import { Produts } from '../types/products.types';

type CartContextType = {
    userCart: Produts[];
    addProduts: (id: number) => void;
    removeProduts: (id: number) => void;
    removeAll: () => void;
    shop: Produts[];
};

type CartProps = {
    children: React.ReactNode;
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartProps) => {

    const [userCart, setUserCart] = useState<Produts[]>([]);
    const [shop, setShop] = useState<Produts[]>([]);

    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                console.log("data =>", data);
                setShop(data);
            })
            .catch(err => console.log(err));

    }, [])
    
    const addProduts = (id: number) => {

    };

    const removeProduts = (id: number) => {

    };

    const removeAll = () => {

    };

    return (
        <CartContext.Provider value={{removeAll, addProduts, removeProduts,shop, userCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;