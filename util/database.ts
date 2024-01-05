import mongoose from "mongoose";

function connectDatabase() {
  if (!process.env.MONGODB_URI) {
    throw new Error("No MongoDB URI specified");
  }

  const uri = process.env.MONGODB_URI;

  try {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("connected to database");
      })
      .catch((e) => {
        console.log("Couldn't connect to database");
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

export { connectDatabase };
