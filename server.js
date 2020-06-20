const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

// Get .env path
dotenv.config({ path: "./config/config.env" });

// Connect to MongoDB
const connectDB = require("./config/db-mongo");
connectDB();

// Iniate route
const routes = require("./routes/routes");
const routes_mongo = require("./routes/routes-mongo");
const routes_sql = require("./routes/routes-sql");

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Init routes
app.use("/api/", routes);
app.use("/apiMongo/", routes_mongo);
app.use("/apiSql/", routes_sql);

// Get Build path for React
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.green.bold
    )
  );