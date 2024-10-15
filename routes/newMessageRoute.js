// New Message Router
const { Router } = require('express');

// Controller
const { renderNewMessages, addMessage } = require('../controllers/messageControllers.js')

const newMessageRouter = Router();

// Route
newMessageRouter.get('/', renderNewMessages)
newMessageRouter.post("/", addMessage);

module.exports = newMessageRouter;