import React from 'react'

import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Headers = () => {
  return (
    <header>
      <Link className="logo" to="/">
        shop cart
      </Link>
      <Link to="/cart">
        <AiOutlineShoppingCart className="shop-icon" />
        <span>2</span>
      </Link>
    </header>
  )
}

export default Headers
