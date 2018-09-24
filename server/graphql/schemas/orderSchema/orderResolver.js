import {getShop} from '../shopSchema/shopQueries';
import {deleteOrder} from './orderMutations';
import {getLineItem, getAllLineItemsForOrder} from '../lineItemSchema/lineItemQueries';

export const resolvers = {
    Order: {
        async shop(parentValue, args){
            return await getShop(parentValue.shop_id);
        },

        async line_item(parentValue, {line_item_id}){
            return await getLineItem(parentValue.order_id, line_item_id);
        },

        async line_items(parentValue, {}){
            return await getAllLineItemsForOrder(parentValue.order_id);
        },
    },

    Mutation: {
        deleteOrder: async  (parentValue, {order_id}) => {
            return await deleteOrder(order_id);
        },

    },
};