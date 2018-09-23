import {getShop, getAllShops} from '../shopSchema/shopQueries';

export const resolvers = {
  Query: {
    async shop(parentValue, { shop_id }) {
      return await getShop(shop_id);
    },

    async shops(parentValue, args) {
      return await getAllShops();
    },
  },
};
