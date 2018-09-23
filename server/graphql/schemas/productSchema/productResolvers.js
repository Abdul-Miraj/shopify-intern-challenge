import {getShop} from '../shopSchema/shopQueries';
import {createProduct, updateProduct, deleteProduct} from './productMutations';

export const resolvers = {
    Product: {
        async shop(parentValue, args){
            return await getShop(parentValue.shop_id);
        },
    },

    Mutation: {
        createProduct: async (parentValue, {shop_id, name, price, active}) => {
            return await createProduct(shop_id, name, price, active);
        },

        updateProduct: async (parentValue, {product_id, name, price, active}) => {
            return await updateProduct(product_id, name, price, active);
        },

        deleteProduct: async  (parentValue, {product_id}) => {
            return await deleteProduct(product_id);
        },

    },
};