require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT;

// const postRouter = require("./routes/post-routes");
const userRouter = require("./routes/user-routes");

const errorAppMiddleware = require("./middleware/errorAppMiddleware");
const { notFoundMiddleware } = require("./middleware/notFoundMiddleware");

const {
  RegistrationDev,
  RegistrationArchive,
} = require("./middleware/registrationMiddleware");

const { appTimestampMiddleware } = require("./middleware/appMiddleware");

const sequelize = require("./database/integradorConnection");

app.use([RegistrationDev, RegistrationArchive]);

app.use(appTimestampMiddleware);

app.use(userRouter);

app.all("*", notFoundMiddleware);

app.use(errorAppMiddleware);

app.listen(port, "localhost", () => {
  console.log("app corriendo en el puerto " + port);
});
