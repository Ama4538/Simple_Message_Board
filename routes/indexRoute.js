// Index Router
const { Router } = require('express');

// Controller
const {getMessages} = require("../controllers/messageControllers.js")

const indexRouter = Router();

// Route
indexRouter.get('/', getMessages);

module.exports = indexRouter;