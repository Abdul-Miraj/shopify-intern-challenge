export const typeDefs = `
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    shop(shop_id: Int!): Shop
    shops: [Shop]
  }
`
