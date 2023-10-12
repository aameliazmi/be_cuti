const sql = require('mssql');
const { ConnectionPool } = require('mssql');

const config = {
  user: 'test',
  password: '1234567',
  server: 'DESKTOP-CGH6082',
  database: 'employeeManagement',
  options: {
    encrypt: false, // Non-SSL connection
  },
};

sql.connect(config, function (error) {
  if (error) console.log(error);
  else console.log('Connected to SQL Server');
});

module.exports = sql;