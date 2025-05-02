const dotenv = require("dotenv");
const path = require("node:path");

dotenv.config({ path: path.join(__dirname, "config/config.env") });

const app = require("./app");
const connectDatabase = require("./config/dbConfig");

connectDatabase();

const PORT = process.env.PORT || 5000;
const enviroment = process.env.NODE_ENV;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${enviroment} `);
});
