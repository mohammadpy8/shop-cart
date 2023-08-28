import React, {useContext} from 'react'

import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { Produts } from '../../types/products.types'
import { CartContext } from '../../context/CartContextProvider'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'

const Card: React.FC<Produts> = ({ id, title, image, price, rating: { rate } }) => {

    const CartContextProduct = useContext(CartContext);

    const { addProduts } = CartContextProduct;

    const navigate = useNavigate();
    
    const addToBasketHandler = () => {
        addProduts(id);
        swal({
            title: "محصول به سبد خرید اضافه شد.",
            icon: "success",
            buttons: ["اوکی", "رفتن به سبد خرید"]
        })
            .then(result => {
                console.log(result);
                if (result) {
                    navigate("/cart");
                }
            })
    };

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
        <button onClick={addToBasketHandler}>Add to Basket</button>
      </main>
    </div>
  )
}

export default Card
