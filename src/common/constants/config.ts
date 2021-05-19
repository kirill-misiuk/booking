export const ENVIRONMENT_VARIABLES = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
  swagger: {
    title: process.env.SWAGGER_TITLE || 'Booking',
    description: process.env.SWAGGER_DESCRIPTION || 'Booking rooms API',
    version: process.env.SWAGGER_VERSION || '1.0',
    tag: 'booking',
  },
};
export const configuration = () => ENVIRONMENT_VARIABLES;
