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


// import { createPool } from "mysql2";
// import { envs } from "../../config/envs";
// import dotenv from 'dotenv/config';
// import {DATA_SOURCES} from "../../config/datasource.config";

// const datasource = DATA_SOURCES.mySqlDataSource;

// /**
//  * Generates pool connection to be used throughout the app
//  */

// export class MySqlDatabase {


//   public static init = () => {
//     let pool;
    
//     try {
//       pool = createPool({
//         connectionLimit: datasource.MYSQL_DB_CONNECTION_LIMIT,
//         host: datasource.MYSQL_DB_HOST,
//         user: datasource.MYSQL_DB_USER,
//         password: datasource.MYSQL_DB_PASSWORD,
//         database: datasource.MYSQL_DB_DATABASE,
//       })

//     } catch (error) {
      
//     }
//   }




// }
