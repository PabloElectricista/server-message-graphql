import { connect } from "mongoose";
import { config } from 'dotenv'
config()


export default async function dbconnection() {
  try {
    await connect(process.env.MONGO_URL);
  } catch (error) {
    console.error(error.message);
  }
}
