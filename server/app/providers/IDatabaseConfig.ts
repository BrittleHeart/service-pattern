import mongoose from "mongoose";

export default interface DatabaseConfig {
  uri: string;
  user: string;
  password: string;
  database: string;
}