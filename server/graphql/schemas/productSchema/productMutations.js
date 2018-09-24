import db from '../../../db/db';
import {updateTotalPriceForOrder} from '../orderSchema/orderMutations';
import {createProductQuery, updateProductQuery, deleteProductQuery} from '../queries/utilQueries';

// CREATE
const createProduct = async (shopId, name, price, active = true) => {
    const query = createProductQuery({shop_id: shopId, name: name, price: price, active: active});

    return await db.getQueryFromDB(query);
};

// UPDATE
const updateProduct = async (productId, name, price, active) => {
    const query = updateProductQuery({product_id: productId, name: name, price: price, active: active});

    const updatedProduct = await db.getQueryFromDB(query);

    return updatedProduct;
};

// DELETE
const deleteProduct = async (productId) => {
    const query = deleteProductQuery({product_id: productId});

    return await db.getQueryFromDB(query);
};

module.exports = {
    createProduct,
    updateProduct,
    deleteProduct,
}