export const ENVIRONMENT_VARIABLES = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
  swagger: {
    title: process.env.SWAGGER_TITLE || 'Booking',
    description: process.env.SWAGGER_DESCRIPTION || 'Booking rooms API',
    version: process.env.SWAGGER_VERSION || '1.0',
    tag: 'booking',
  },
  db: {
    type: process.env.DB_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: +process.env.DB_PORT || 5432,
    username: process.env.DB_USERNAME || 'postgres',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'booking-development',
    synchronize: process.env.DB_SYNCRONIZE || false,
    migrationsRun: process.env.DB_MIGRATIONS_RUN || true,
  },
};
export const configuration = () => ENVIRONMENT_VARIABLES;
