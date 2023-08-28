import React, { useContext } from 'react'
import './Cart.css'
import { AiFillStar, AiOutlineDelete, AiOutlineStar } from 'react-icons/ai'
import { CartContext } from '../context/CartContextProvider'
import { Produts } from '../types/products.types'

const Cart: React.FC<Produts> = () => {
  const CartShop = useContext(CartContext)

  const { removeAll, removeProduts } = CartShop

  return (
    <>
      {CartShop.userCart.length !== 0 ? ( // if shoppping cart is not empty
        <>
          <section className="cart-topbar">
            <p className="title">All Products In Basket:</p>
            <button onClick={() => removeAll()}>
              Remove All Product <AiOutlineDelete className="delete-icon" />
            </button>
          </section>
          <main className="card-index">
            {
              CartShop.userCart.map(product => {
                const { id, image, title, rating: { rate }, count, price } = product;
                return (
                  <div className="card">
                  <img src={image} alt="products" />
                  <main>
                    <p>{title.slice(0, 15)}</p>
                    <div className="card-details">
                      <div>
                        {Array(Math.ceil(rate))
                          .fill(0)
                          .map(() => (
                            <AiFillStar style={{ color: 'orange' }} />
                          ))}
                        {Array(5 - Math.ceil(rate))
                          .fill(0)
                          .map(() => (
                            <AiOutlineStar style={{ color: 'orange' }} />
                          ))}
                      </div>
                      <p>{price}$</p>
                    </div>
                    <div className="product-count">
                      <p>Count: {count}</p>
                    </div>
                    <button onClick={() => removeProduts(id)}>
                      Remove From Basket
                    </button>
                  </main>
                </div>
                )
              })
            }
          </main>
        </>
      ) : (
        <div className="emptyBasket">
          <img src="/empty.webp" alt="" />
          <p>Your Basket Is Empty :((</p>
        </div>
      )}
    </>
  )
}

export default Cart
