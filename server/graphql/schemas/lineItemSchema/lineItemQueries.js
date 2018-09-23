import db from '../../../db/db';
import {ORDERS, LINE_ITEMS} from '../../../db/constants';
import utilQueries from '../queries/utilQueries'

// READ
const getLineItem = async (orderId, lineItemId) => {
    const query = utilQueries.getLineItemQuery({order_id: orderId, line_item_id: lineItemId});

    return await db.getQueryFromDB(query);
};

const getAllLineItemsForOrder = async orderId => {
    const query = utilQueries.createGetInnerJoinQuery(LINE_ITEMS, ORDERS, orderId);

    return await db.getQueryFromDB(query, true,);
};

module.exports = {
    getLineItem,
    getAllLineItemsForOrder,
}