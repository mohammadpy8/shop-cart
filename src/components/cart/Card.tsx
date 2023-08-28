import React from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Produts } from '../../types/products.types'

const Card = ({ id, title, image, price, rating: { rate } }: Produts) => {
  return (
    <div className="card">
      <img src={image} alt="products" />
      <main>
        <p>{title.slice(0, 10)}</p>
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
        <button>Add to Basket</button>
      </main>
    </div>
  )
}

export default Card
