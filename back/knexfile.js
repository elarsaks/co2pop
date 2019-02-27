module.exports = {
  development: {
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : 'Code4Fun',
      database : 'co2pop'
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
  },
};
