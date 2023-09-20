import { MongoClient } from "mongodb";

//const connectionString = process.env.ATLAS_URI || "";
const connectionString = "mongodb+srv://Ammarah:Password123@cluster0.bfuawr1.mongodb.net/"
const client = new MongoClient(connectionString)

let conn;
try {
  conn = await client.connect();
  console.log("successfully log in the db")
} catch(e) {
  console.error(e);
}

let db = conn.db("apds");

export default db;