// Index Router
const { Router } = require('express');
const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    res.render('index', {message: "Hi from index"})
})

module.exports = indexRouter;