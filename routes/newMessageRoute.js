// New Message Router
const { Router } = require('express');
const { addMessage, getSize } = require('../modules/message.js');

const newMessageRouter = Router();

newMessageRouter.get('/', (req, res) => {
    res.render('index', { location: "new" })
})

newMessageRouter.post("/", (req, res) => {
    try {
        // Format hour:minute(pm/am) on day/month/year
        const now = new Date()
        const date = `${now.getHours() % 12 == 0 ? 12 : now.getHours() % 12}:${String(now.getMinutes()).padStart(2, '0')}${(now.getHours() / 12) >= 1 && (now.getHours() / 12) < 2 ? 'pm' : 'am'} on ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

        // Adding new message into messages array
        addMessage({
            id: getSize(),
            title: req.body['form-title'],
            text: req.body['form-message'],
            user: req.body['form-user'] == '' ? 'anonymous' : req.body['form-user'],
            added: date
        })

        res.redirect('/')
    } catch (err) {
        console.error("Error adding message:", error);
        res.status(500).send("Internal Server Error");
    }

})

module.exports = newMessageRouter;