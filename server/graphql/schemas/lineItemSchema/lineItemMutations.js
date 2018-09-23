import db from '../../../db/db';
import utilQueries from '../queries/utilQueries'
import {createOrder, updateTotalPriceForOrder} from '../orderSchema/orderMutations';

// CREATE
const createLineItem = async (shopId, productId, orderId, qty) => {
    const query = utilQueries.createLineItemQuery({shop_id: shopId, product_id: productId, order_id: orderId, qty});

    return await db.getQueryFromDB(query);
};

const createLineItemInOrder = async (shopId, productId, orderId, qty = 0, status = null) => {
  
    let checkOrderId = orderId

    // When an Order wasn't passed in, create a new Order
    if (!checkOrderId) {
      const newOrder = await createOrder(shopId, status);
      checkOrderId = newOrder.order_id;
    }
  
    // Create a new LineItem
    const newLineItem = await createLineItem(shopId, productId, checkOrderId, qty);
  
    // Update total price for the Parent Order
    await updateTotalPriceForOrder(checkOrderId);

    return newLineItem;
  };

// UPDATE
const updateLineItem = async (lineItemId, qty) => {
    const query = utilQueries.updateLineItemQuery({line_item_id: lineItemId, qty: qty});

    return await db.getQueryFromDB(query);
};

const updateLineItemInOrder = async (orderId, lineItemId, qty) => {
    
    // update the respective LineItem in the DB
    const updatedLineItem = await updateLineItem(lineItemId, qty);

    // update Total Price of the parent Order
    await updateTotalPriceForOrder(orderId);

    return updatedLineItem;
  
  }

// DELETE
const deleteLineItem = async lineItemId => {
    const query = utilQueries.deleteLineItemQuery({line_item_id: lineItemId});

    return await db.getQueryFromDB(query);
};

const deleteLineItemInOrder = async (orderId, lineItemId) => {

  // Delete the respective Line Item
  await deleteLineItem(lineItemId);

  // update Total Price of the parent Order
  await updateTotalPriceForOrder(orderId);
  return null;
}

module.exports = {
    createLineItem,
    createLineItemInOrder,
    updateLineItem,
    updateLineItemInOrder,
    deleteLineItem,
    deleteLineItemInOrder,
}