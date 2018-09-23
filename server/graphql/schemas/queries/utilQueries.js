// GENERAL QUERIES
const createGetWhereQuery = (tblName, id) => `SELECT * FROM "${tblName}" WHERE ${tblName.slice(0, -1)}_id=${id}`;

const createGetAllQuery = tblName => `SELECT * FROM "${tblName}"`;

const createGetInnerJoinQuery = (leftTable, rightTable, id) => {
  const removeS = rightTable.slice(0, -1);
  return `SELECT ${leftTable}.* from ${leftTable} INNER JOIN ${rightTable} on ${leftTable}.${removeS}_id = ${rightTable}.${removeS}_id AND ${rightTable}.${removeS}_id = ${id}`;
};


// SHOP QUERIES
const createShopQuery = shopObject => `INSERT INTO shops values('${shopObject.name}') RETURNING *`;

const updateShopQuery = (shopObject) => {
  let updateName = '';

  if (shopObject.name) {
    updateName = `,name = '${shopObject.name}'`;
  }

  return `UPDATE shops SET shop_id = ${shopObject.shop_id} ${updateName} WHERE shop_id = ${shopObject.shop_id} RETURNING *`;
};

const deleteShopQuery = shopObject => ` DELETE FROM line_items WHERE shop_id = ${shopObject.shop_id}; DELETE FROM products WHERE shop_id = ${shopObject.shop_id}; DELETE FROM orders WHERE shop_id = ${shopObject.shop_id}; DELETE FROM shops WHERE shop_id = ${shopObject.shop_id};`;


// PRODUCT QUERIES
const createProductQuery = productObject => `INSERT INTO products values('${productObject.name}', '${productObject.price}', ${productObject.active}, '${productObject.shop_id}') RETURNING *`;
const getProductQuery = productObject =>  `SELECT * FROM products WHERE product_id=${productObject.product_id} AND shop_id=${productObject.shop_id}`;
const updateProductQuery = productObject => {
  let updateName = '';
  let updatePrice = '';
  let updateActive = '';

  if (productObject.name) {
    updateName = `name = '${productObject.name}',`;
  }

  if (productObject.price) {
    updatePrice = `price = ${productObject.price.toFixed(2)},`;
  }

  if (productObject.active !== undefined) {
    updateActive = `active = ${productObject.active},`;
  }

  const updateQueries = (`SET product_id = ${productObject.product_id},` + updateName + updatePrice + updateActive).slice(0, -1);

  return `
  UPDATE products ${updateQueries} WHERE product_id = ${productObject.product_id} RETURNING *;`;
};
const deleteProductQuery = productObject => `DELETE FROM line_items WHERE product_id = ${productObject.product_id}; DELETE FROM products WHERE product_id = ${productObject.product_id};`;


// LINE ITEM QUERIES
const createLineItemQuery = lineItemObject => `INSERT INTO line_items (qty, price, shop_id, order_id, product_id) SELECT ${lineItemObject.qty}, price * ${lineItemObject.qty}, ${lineItemObject.shop_id}, ${lineItemObject.order_id}, ${lineItemObject.product_id} FROM products WHERE product_id = ${lineItemObject.product_id} RETURNING *;`;
const getLineItemQuery = lineItemObject =>  `SELECT * FROM line_items WHERE order_id=${lineItemObject.order_id} AND line_item_id=${lineItemObject.line_item_id}`;
const updateLineItemQuery = lineItemObject => `UPDATE line_items SET qty = ${lineItemObject.qty}, price = ${lineItemObject.qty} * (SELECT price FROM products WHERE product_id = line_items.product_id) WHERE line_item_id = ${lineItemObject.line_item_id} RETURNING *`;
const deleteLineItemQuery = lineItemObject => `DELETE FROM line_items WHERE line_item_id = ${lineItemObject.line_item_id};`

// ORDER QUERIES
const createOrderQuery = orderObject => `INSERT INTO orders(status, shop_id, total_price) VALUES('${orderObject.status}', ${orderObject.shop_id}, 0) RETURNING *;`;
const updateTotalPriceQuery = orderObject => `UPDATE orders SET total_price = (SELECT SUM(price) FROM line_items WHERE line_items.order_id = ${orderObject.order_id}) WHERE order_id = ${orderObject.order_id} RETURNING *`;
const deleteOrderQuery = orderObject => `DELETE FROM line_items WHERE order_id = ${orderObject.order_id}; DELETE FROM orders WHERE order_id = ${orderObject.order_id} RETURNING *;`





module.exports = {
  createGetWhereQuery,
  createGetAllQuery,
  createGetInnerJoinQuery,
  createShopQuery,
  updateShopQuery,
  deleteShopQuery,
  createProductQuery,
  getProductQuery,
  updateProductQuery,
  deleteProductQuery,
  createOrderQuery,
  updateTotalPriceQuery,
  deleteOrderQuery,
  createLineItemQuery,
  getLineItemQuery,
  updateLineItemQuery,
  deleteLineItemQuery,
};
