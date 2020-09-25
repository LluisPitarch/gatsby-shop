import React from "react"
import { graphql } from "gatsby"
import { Jumbo } from "../components"
import { SEO } from "../components"
import Products from "../components/Products"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripePrice {
      edges {
        node {
          product {
            active
            id
            images
            metadata {
              description
              img
              wear
              color
            }
            name
          }
          currency
          unit_amount
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Products products={data.allStripePrice.edges} />
    </>
  )
}
export default IndexPage
