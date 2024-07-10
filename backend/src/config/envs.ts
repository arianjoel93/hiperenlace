import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MYSQL_DATABASE_NAME: get('MYSQL_DATABASE_NAME').required().asString(),
  MYSQL_ROOT_PASSWORD: get('MYSQL_ROOT_PASSWORD').required().asString(),
  MYSQL_USER_ROOT: get('MYSQL_USER_ROOT').required().asString(),
  MYSQL_PORT: get('MYSQL_PORT').required().asPortNumber(),
  JWT_SEED: get('JWT_SEED').required().asString(),
}