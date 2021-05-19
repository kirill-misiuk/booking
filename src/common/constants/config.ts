export const ENVIRONMENT_VARIABLES = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || '3000',
};
export const configuration = () => ENVIRONMENT_VARIABLES;
