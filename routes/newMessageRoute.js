// New Message Router
const { Router } = require('express');
const { addMessage } = require('../modules/message.js');

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render('index', { location: "new" })
})

newMessageRouter.post("/", (req, res) => {
    const now = new Date()
    const date = `${now.getHours() % 12}:${String(now.getMinutes()).padStart(2, '0')}${(now.getHours() / 12) >= 1 && (now.getHours() / 12) < 2 ? 'pm' : 'am'} on ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

    addMessage({
        title: req.body['form-title'],
        text: req.body['form-message'],
        user: req.body['form-user'] == '' ? 'anonymous' : req.body['form-user'],
        added: date
    })

    res.redirect('/')
})

module.exports = newMessageRouter;