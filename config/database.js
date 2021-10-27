module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('PLANETSCALE_DB_HOST', '127.0.0.1'),
        port: env.int('PLANETSCALE_DB_PORT', 3306),
        database: env('PLANETSCALE_DB_NAME', 'bobo'),
        username: env('PLANETSCALE_DB_USERNAME', 'root'),
        password: env('PLANETSCALE_DB_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
