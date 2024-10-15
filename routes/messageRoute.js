// Message Router
const { Router } = require('express');

// Controller
const { getSingleMessage } = require('../controllers/messageControllers.js');

const messageRouter = Router();

messageRouter.get('/:id', getSingleMessage)

module.exports = messageRouter;