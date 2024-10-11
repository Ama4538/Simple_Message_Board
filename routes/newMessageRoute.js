// New Message Router
const { Router } = require('express');
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.send('Hi from new message');
})

module.exports = newMessageRouter;