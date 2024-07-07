import mongoose from "mongoose";
import { envs } from "../../config/envs";

interface Options {
  mongoUrl: string;
  dbName: string;
}

export class MongoDatabase {

  static async connect(options: Options) {
    const { mongoUrl, dbName } = options;

    try {
      await mongoose.connect(mongoUrl, {
        dbName: dbName,
      });

      console.log('MongoDB connected!!!!!!!!!');
      return true;
      
    } catch (error) {
      console.log('MongoDB error', error);
      throw error;
    }
  }
}