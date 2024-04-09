import mongoose from "mongoose";

export const connect = async function () {
  try {
    let res = await mongoose.connect(
      `mongodb://kabirmalv3:AaON9qsvLMbBCEsn@ac-yufr2kd-shard-00-00.q1oizr4.mongodb.net:27017,ac-yufr2kd-shard-00-01.q1oizr4.mongodb.net:27017,ac-yufr2kd-shard-00-02.q1oizr4.mongodb.net:27017/?ssl=true&replicaSet=atlas-hvticn-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Ecom`
    );
    if (res) console.log("Connected to DB");
  } catch (error) {
    console.log(error.message);
  }
};
