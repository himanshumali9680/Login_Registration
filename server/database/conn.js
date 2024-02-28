import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";

async function connect(){
    const mongod = await MongoMemoryServer.create();
    const getUri = mongod.getUri();

    mongoose.set('strict')
    const db = await mongoose.connect(getUri);
    console.log("Database Connected")
    return db;
}

export default connect;