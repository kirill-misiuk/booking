import { ENVIRONMENT_VARIABLES } from './src/common/constants';

export = {
  ...ENVIRONMENT_VARIABLES.db,
  schema: 'booking-schema',
  entities: ['src/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  seeds: ['seeds/**/*{.ts,.js}'],
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'src/migrations',
  },
};
