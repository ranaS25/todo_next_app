import "dotenv/config";

import connectDB from "./db/index.js";
import app from "./app.js"
connectDB()
  .then(() => {
    console.log("database connected...");
    app.on("error", (err) => {
      console.log("ERROR: ", err);
      process.exit(1);
    })
    app.listen(3000, () => {
      console.log("listening on port 3000...");
    })
  })
  .catch((err) => {
    console.log("ERROR CONNECTING DB: ", err);
  });
