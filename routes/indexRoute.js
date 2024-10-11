// Index Router
const { Router } = require('express');
const { getMessages } = require('../modules/message.js');

const indexRouter = Router();
const messages = getMessages();

indexRouter.get('/', (req, res) => {
    // Added random color to each message
    const updatedMessages = messages.map(message => ({
        ...message,
        color1: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        color2: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
    }))

    res.render('index', { location: "index", messages: updatedMessages })
})

module.exports = indexRouter;