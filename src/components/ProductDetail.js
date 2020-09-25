import React, { useState, useContext } from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  QtySelect,
  QtyButton,
  Button,
  StyledProductDetail,
} from "../styles/components.js"

import { SEO } from "./"
import Stars from "./Stars"

import { CartContext } from "../Context"

const ProductDetail = ({ unit_amount, product }) => {
  const [size, setSize] = useState(2)
  const [qty, setQty] = useState(1)
  const { cart, addToCart } = useContext(CartContext)

  const { description, name, metadata, id } = product
  const price = priceFormat(unit_amount)

  const handleAddToCart = () => {
    addToCart({
      name: name,
      price: unit_amount,
      sku: id,
      qty: 1,
      img: metadata.img,
    })
  }

  return (
    <StyledProductDetail>
      <SEO title={name} description={description} />
      <img src={metadata.img} alt={name} />
      <div>
        <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {price}</b>
        <Stars />
        {metadata.wear && `Color: ${metadata.color}`}
        <small>{description}</small>
        {metadata.wear && (
          <SizeSelect selected={size}>
            <SizeButton onClick={() => setSize(1)}>S</SizeButton>
            <SizeButton onClick={() => setSize(2)}>M</SizeButton>
            <SizeButton onClick={() => setSize(3)}>L</SizeButton>
            <SizeButton onClick={() => setSize(4)}>XL</SizeButton>
          </SizeSelect>
        )}

        <p>Quantity: </p>
        <QtySelect>
          <QtyButton onClick={() => (qty > 1 ? setQty(qty - 1) : null)}>
            -
          </QtyButton>
          <input type="text" disabled value={qty} />
          <QtyButton onClick={() => setQty(qty + 1)}>+</QtyButton>
        </QtySelect>
        <Button
          onClick={() => {
            handleAddToCart()
          }}
        >
          Agregar al carrito
        </Button>
      </div>
    </StyledProductDetail>
  )
}

export default ProductDetail
