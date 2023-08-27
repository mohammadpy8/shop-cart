import React, { createContext, useEffect, useState } from 'react'

import { Produts } from '../types/products.types'

type CartContextType = {
  userCart: Produts[]
  addProduts: (id: number) => void
  removeProduts: (id: number) => void
  removeAll: () => void
    shop: Produts[];
}

type CartProps = {
  children: React.ReactNode
}

export const CartContext = createContext({} as CartContextType)

const CartContextProvider = ({ children }: CartProps) => {
  const [userCart, setUserCart] = useState<Produts[]>([])
  const [shop, setShop] = useState<Produts[]>([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        console.log('data =>', data)
        setShop(data)
      })
      .catch((err) => console.log(err))
  }, [])

  const addProduts = (id: number) => {
    setUserCart(prevProducts => {

      const mainProductInCart = userCart.find(product => product.id === id);

      if (mainProductInCart) {
        return prevProducts.map(product => {
          if (product.id === id) {
            return {...product, count:product.count + 1}
          } else {
            return product;
          }
        })
      } else {
        const mainProductInShop = shop.find(product => product.id === id) as Produts;
        return [...prevProducts, {...mainProductInShop, count:1}]
      }
      return []
    })
  }

  const removeProduts = (id: number) => setUserCart(prevProducts => prevProducts.filter(product => product.id !== id));

  const removeAll = () => setUserCart([]);
  
  return (
    <CartContext.Provider
      value={{ removeAll, addProduts, removeProduts, shop, userCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
