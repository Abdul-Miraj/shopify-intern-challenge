export const typeDefs = `
  type LineItem {
    line_item_id: Int!
    qty: Int
    price: Float
    product: Product
    order: Order
    shop: Shop
  }

  extend type Mutation {
    createLineItemInOrder(shop_id: Int! product_id: Int! order_id: Int qty: Int): LineItem
    updateLineItemInOrder(order_id: Int! line_item_id: Int! qty: Int!): LineItem
    deleteLineItemInOrder(order_id: Int! line_item_id: Int!): LineItem
  }
`
