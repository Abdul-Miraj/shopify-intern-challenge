import db from '../../../db/db';
import {createShopQuery, updateShopQuery, deleteShopQuery} from '../queries/utilQueries';

// CREATE
const createShop = async (name) => {
    const query = createShopQuery({name});

    return await db.getQueryFromDB(query);
};

// UPDATE
const updateShop = async (shopId, name) => {
    const query = updateShopQuery({shop_id: shopId, name: name});

    return await db.getQueryFromDB(query);
};

// DELETE
const deleteShop = async (shopId) => {
    const query = deleteShopQuery({shop_id: shopId});

    await db.getQueryFromDB(query);
    
    return null;
};

module.exports = {
    createShop,
    updateShop,
    deleteShop,
}