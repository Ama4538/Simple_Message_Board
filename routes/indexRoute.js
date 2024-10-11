// Index Router
const { Router } = require('express');
const indexRouter = Router();

// Place Holder Message
const messages = [
    {
        title: "Guess What",
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        title: "Guess What",
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
];

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