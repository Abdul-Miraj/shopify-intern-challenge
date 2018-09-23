export const typeDefs = `
  type Order {
    order_id: Int!
    status: String
    total_price: Float
    shop: Shop
    line_item(line_item_id: Int!): LineItem
    line_items: [LineItem]
  }

  extend type Mutation {
      deleteOrder(order_id: Int!): Order
  }
`
