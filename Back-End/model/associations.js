require("dotenv").config();
const sequelize = require("../database/integradorConnection");
const User = require("./user-model");
const Message = require("./message-model");
const Country = require("./country-model");
const City = require("./city-model");

User.hasMany(Message, { foreignKey: "id_user" });
Message.belongsTo(User, { foreignKey: "id_user" });

Country.hasMany(City, { foreignKey: "id_country" });
City.belongsTo(Country, { foreignKey: "id_country" });

Country.hasMany(User, { foreignKey: "id_country" });
User.belongsTo(Country, { foreignKey: "id_country" });

sequelize.sync({ alter: true });