import React from "react"
import { Link } from "gatsby"
import priceFormat from "../utils/priceFormat"
import { StyledProducts } from "../styles/components"

const Product = ({ products }) => {
  return (
    <StyledProducts>
      <h2>Productos</h2>
      <section>
        {products.map(product => {
          const price = priceFormat(product.node.unit_amount)
          return (
            <article key={product.node.product.id}>
              <img
                src={product.node.product.metadata.img}
                alt={product.node.product.name}
              />
              <p>{product.node.product.name}</p>
              <p>{price}</p>
              <Link to={product.node.product.id}>Compar 💸</Link>
            </article>
          )
        })}
      </section>
    </StyledProducts>
  )
}

export default Product
