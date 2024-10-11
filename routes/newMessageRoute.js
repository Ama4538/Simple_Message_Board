// New Message Router
const { Router } = require('express');
const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render('index', { location: "new" })
})

module.exports = newMessageRouter;