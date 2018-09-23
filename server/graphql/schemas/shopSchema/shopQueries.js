import db from '../../../db/db';
import {SHOPS} from '../../../db/constants';
import utilQueries from '../queries/utilQueries';

// READ
const getShop = async shopId => {
    const query = utilQueries.createGetWhereQuery(SHOPS, shopId);

    return await db.getQueryFromDB(query);
};

const getAllShops = async () => {
    const query = utilQueries.createGetAllQuery(SHOPS);

    return await db.getQueryFromDB(query, true,);
};

module.exports = {
    getShop,
    getAllShops,
}