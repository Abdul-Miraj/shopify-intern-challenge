const { Pool } = require('pg');

const config = {
  host: '178.128.227.63',
  port: 5432,
  user: 'postgres',
  password: 'admin',
  database: 'shopify',
};

const pool = new Pool(config);

const getQueryFromDB = (query, lstFlag = false) => new Promise((resolve, reject) => {
  pool
    .query(query)
    .then((res) => {
      let resolveRes = res.rows[0];
      if (lstFlag) {
        resolveRes = res.rows;
      }
      resolve(resolveRes);
    })
    .catch(e => reject(e));
});

module.exports = {
  getQueryFromDB,
};