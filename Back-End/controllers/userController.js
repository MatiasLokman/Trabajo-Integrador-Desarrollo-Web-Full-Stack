const User = require("../model/user-model");
const http = require("http-status-codes");
const Message = require("../model/message-model");
// const sequelize = require("../database/integradorConnection");
// const { QueryTypes } = require("sequelize");

// -----------------------------------------------------------------------------------------------------------------------//

const getUserAll = async (req, res) => {
  // const users = await User.findAll();
  const users = await User.findAndCountAll();
  res.json({ status: true, data: users });
};

// -----------------------------------------------------------------------------------------------------------------------//

const receivedMessagesById = async (req, res) => {
  const { username: id } = req.params;
  //VALIDAR ID url = ID LOGIN
  try {
    const result = await Message.findAll({
      where: {
        id_receiver: id,
      },
      include: {
        model: User,
        association: "sender"
      },
    });

    // const resultUser = await User.findAll({
    //   where: {
    //     id_user: result[0].dataValues.id_user,
    //   }
    // });
    // const user = resultUser[0];

    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

// -----------------------------------------------------------------------------------------------------------------------//

const sentMessagesById = async (req, res) => {
  const { username: id } = req.params;
  //VALIDAR ID url = ID LOGIN
  try {
    const result = await Message.findAll({
      where: {
        id_user: id,
      },
      include: User,
    });
    res.json({ result });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
};

// -----------------------------------------------------------------------------------------------------------------------//

const SendMessageToId = async (req, res) => {
  console.log(req.body);
  const data = ({ message, id_receiver, isRead } = req.body);
  const { username } = req.params;
  //VALIDAR USERNAME PARA OBTENER ID
  //VALIDAR ID url = ID LOGIN
  //VALIDAR ID_RECIEVER QUE EXISTA
  const newMessage = await Message.create({
    ...data,
    id_user: parseInt(username),
    isRead: 0
  });
  res.json({ status: http.StatusCodes.OK, data: newMessage });
};

// -----------------------------------------------------------------------------------------------------------------------//

module.exports = {
  getUserAll,
  receivedMessagesById,
  sentMessagesById,
  SendMessageToId,
};
