import db from '../../../db/db';
import {SHOPS, PRODUCTS} from '../../../db/constants';
import utilQueries from '../queries/utilQueries';

// READ
const getProduct = async (shopId, productId) => {
    const query = utilQueries.getProductQuery({shop_id: shopId, product_id: productId});

    return await db.getQueryFromDB(query);
};

const getAllProductsForShop = async shopId => {
    const query = utilQueries.createGetInnerJoinQuery(PRODUCTS, SHOPS, shopId);

    return await db.getQueryFromDB(query, true);
};

module.exports = {
    getProduct,
    getAllProductsForShop,
}