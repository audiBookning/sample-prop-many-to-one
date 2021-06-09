export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  domain: process.env.DOMAIN,
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
  },
});
