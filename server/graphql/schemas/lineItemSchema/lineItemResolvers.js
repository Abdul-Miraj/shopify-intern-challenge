import {getShop} from '../shopSchema/shopQueries';
import {getProduct} from '../productSchema/productQueries';
import {getOrder} from '../orderSchema/orderQueries';

import {createLineItemInOrder, updateLineItemInOrder, deleteLineItemInOrder} from './lineItemMutations';

export const resolvers = {
    LineItem: {
        async shop(parentValue, {}){
            return await getShop(parentValue.shop_id);
        },

        async product(parentValue, {}){
            return await getProduct(parentValue.shop_id, parentValue.product_id);
        },

        async order(parentValue, {}){
            return await getOrder(parentValue.order_id);
        },
    },

    Mutation: {
        createLineItemInOrder: async (parentValue, {shop_id, product_id, order_id, qty}) => {
            return await createLineItemInOrder(shop_id, product_id, order_id, qty);
        },

        updateLineItemInOrder: async (parentValue, {order_id, line_item_id, qty}) => {
            return await updateLineItemInOrder(order_id, line_item_id, qty);
        },

        deleteLineItemInOrder: async  (parentValue, {order_id, line_item_id}) => {
            return await deleteLineItemInOrder(order_id, line_item_id);
        },
    }
};