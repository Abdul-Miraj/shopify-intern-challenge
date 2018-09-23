import db from '../../../db/db';
import {SHOPS, ORDERS} from '../../../db/constants';
import utilQueries from '../queries/utilQueries';

// READ
const getOrder = async orderId => {
    const query = utilQueries.createGetWhereQuery(ORDERS, orderId);

    return await db.getQueryFromDB(query);
};

const getAllOrdersForShop = async shopId => {
    const query = utilQueries.createGetInnerJoinQuery(ORDERS, SHOPS, shopId);

    return await db.getQueryFromDB(query, true);
};


module.exports = {
    getOrder,
    getAllOrdersForShop,
}