import React, { useState } from "react"
import { SelectStars } from "../styles/components"

const Stars = () => {
  const [stars, setStars] = useState(4)
  return (
    <>
      <SelectStars selected={stars}>
        <span role="img" onClick={() => setStars(1)}>
          ★
        </span>
        <span role="img" onClick={() => setStars(2)}>
          ★
        </span>
        <span role="img" onClick={() => setStars(3)}>
          ★
        </span>
        <span role="img" onClick={() => setStars(4)}>
          ★
        </span>
        <span role="img" onClick={() => setStars(5)}>
          ★
        </span>
      </SelectStars>
    </>
  )
}

export default Stars
