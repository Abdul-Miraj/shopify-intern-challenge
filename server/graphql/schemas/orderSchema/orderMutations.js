import db from '../../../db/db';
import utilQueries from '../queries/utilQueries'

// CREATE
const createOrder = async (shopId, status) => {
    const query = utilQueries.createOrderQuery({shop_id: shopId, status: status});
    
    return await db.getQueryFromDB(query);
};

// UPDATE
const updateTotalPriceForOrder = async orderId => {
    const query = utilQueries.updateTotalPriceQuery({order_id: orderId});

    return await db.getQueryFromDB(query);
};

// DELETE
const deleteOrder = async orderId => {
    const query = utilQueries.deleteOrderQuery({order_id: orderId});

    await db.getQueryFromDB(query);
    
    return null
};

module.exports = {
    createOrder,
    updateTotalPriceForOrder,
    deleteOrder,
}