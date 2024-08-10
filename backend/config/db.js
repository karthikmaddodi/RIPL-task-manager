// backend/config/db.js
const sql = require('mssql');

const config = {
    user: 'your_username',
    password: 'your_password',
    server: 'your_server',
    database: 'task_manager_db',
    options: {
        encrypt: true,
        enableArithAbort: true,
    },
};

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to MSSQL');
        return pool;
    })
    .catch(err => console.error('Database Connection Failed:', err));

module.exports = {
    sql, poolPromise
};
