import {Sequelize} from 'sequelize';
import { envs } from '../../config/envs';
import dotenv from 'dotenv/config';
import {DATA_SOURCES} from '../../config/datasource.config';



const datasource = DATA_SOURCES.mySqlDataSource;

export const mySqlDatabase = new Sequelize(datasource.MYSQL_DB_DATABASE, datasource.MYSQL_DB_USER, datasource.MYSQL_DB_PASSWORD, {
  host: datasource.MYSQL_DB_HOST,
  dialect: 'mysql',
  port: datasource.MYSQL_DB_PORT,
  
})
