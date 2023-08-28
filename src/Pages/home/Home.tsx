import React, { useContext } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { CartContext } from '../../context/CartContextProvider'
import Card from '../../components/cart/Card';

const Home = () => {

  const productContext = useContext(CartContext);

  return (
    <>
      <section>
        <p className="title">All Products:</p>
      </section>
      <img className="index-first-bg" src="/hero-gradient.svg" alt="" />
      <main className="main-index">
        {
          productContext.shop.map(products => <Card key={products.id} {...products} />)
        }
      </main>
    </>
  )
}

export default Home
