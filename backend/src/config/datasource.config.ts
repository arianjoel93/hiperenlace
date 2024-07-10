import { envs } from './envs';

export const DATA_SOURCES = {
  mySqlDataSource: {
      MYSQL_DB_HOST: 'localhost',
      MYSQL_DB_USER: envs.MYSQL_USER_ROOT,
      MYSQL_DB_PASSWORD: envs.MYSQL_ROOT_PASSWORD,
      MYSQL_DB_PORT: envs.MYSQL_PORT,
      MYSQL_DB_DATABASE: envs.MYSQL_DATABASE_NAME,
      MYSQL_DB_CONNECTION_LIMIT: 4,
  }
};
