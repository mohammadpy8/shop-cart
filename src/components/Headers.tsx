import React from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai'

const Headers = () => {
  return (
    <header>
      <a className="logo" href="#">
        shop cart
      </a>
      <a href="#">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>2</span>
      </a>
    </header>
  )
}

export default Headers
