import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"

import { Button, StyledCart } from "../styles/components"

import { CartContext } from "../Context"
import priceFormat from "../utils/priceFormat"

const CartDetail = () => {
  const { cart } = useContext(CartContext)

  const [total, setTotal] = useState(0)

  const getTotal = () => {
    setTotal(
      cart.reduce((acc, current) => acc + current.price * current.qty, 0)
    )
  }

  useEffect(() => {
    getTotal()
  }, [])

  return (
    <StyledCart>
      <h2>Shopping Cart</h2>
      <table>
        <tbody>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.map(product => {
            return (
              <tr key={product.sku}>
                <td>
                  <img src={product.img} alt={product.name} />
                  {product.name}
                </td>
                <td>USD {priceFormat(product.price)}</td>
                <td>{product.qty}</td>
                <td>Total: {priceFormat(product.price * product.qty)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <nav>
        <div>
          <h3>Subtotal:</h3>
          <small>USD {priceFormat(total)}</small>
        </div>
        <div>
          <Link to="/">
            <Button type="outline">Back</Button>
          </Link>
          <Button>Compar</Button>
        </div>
      </nav>
    </StyledCart>
  )
}

export default CartDetail
