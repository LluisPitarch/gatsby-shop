const path = require(`path`)
const { graphql } = require("gatsby")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve(`src/templates/Product.js`)

  const result = await graphql(`
    query GET_PRODUCTS {
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
  `)

  if (result.errors) {
    throw results.errors
  }

  result.data.allStripePrice.edges.forEach(({ node }) => {
    createPage({
      path: `${node.product.id}`,
      component: productTemplate,
      context: node,
    })
  })
}
