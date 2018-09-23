export const typeDefs = `
  type Shop {
    shop_id: Int!
    name: String!
    product(product_id: Int!): Product
    products: [Product]
    order(order_id: Int!): Order
    orders: [Order]
  }

  type Mutation {
    createShop(name: String!): Shop
    updateShop(shop_id: Int!, name: String!): Shop
    deleteShop(shop_id: Int!): Shop
  }
`;
