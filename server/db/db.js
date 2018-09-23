const { Pool } = require('pg');

const config = {
  host: 'localhost',
  port: 8000,
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