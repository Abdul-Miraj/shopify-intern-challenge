export const typeDefs = ` 
  type Product {
    product_id: Int!
    name: String
    price: Float
    active: Boolean
    shop: Shop
  }

  extend type Mutation {
    createProduct(shop_id: Int! name: String! price: Float! active: Boolean): Product
    updateProduct(product_id: Int! name: String price: Float active: Boolean): Product
    deleteProduct(product_id: Int!): Product
  }
`
