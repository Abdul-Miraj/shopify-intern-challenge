import {createShop, updateShop, deleteShop} from './shopMutations';
import {getProduct, getAllProductsForShop} from '../productSchema/productQueries';
import {getOrder, getAllOrdersForShop} from '../orderSchema/orderQueries';

export const resolvers = {
    Shop: {
        async product(parentValue, {product_id}){
            return await getProduct(parentValue.shop_id, product_id);
        },

        async products(parentValue, {}){
            return await getAllProductsForShop(parentValue.shop_id);
        },

        async order(parentValue, {order_id}){
            return await getOrder(order_id);
        },

        async orders(parentValue, {}){
            return await getAllOrdersForShop(parentValue.shop_id);
        },
    },

    Mutation: {
        createShop: async (parentValue, {name}) => {
            return await createShop(name);
        },

        updateShop: async (parentValue, {shop_id, name}) => {
            return await updateShop(shop_id, name);
        },

        deleteShop: async  (parentValue, {shop_id}) => {
            return await deleteShop(shop_id);
        },
    }
};