// Message Router
const { Router } = require('express');
const { getSize, getMessage } = require('../modules/message.js');
const messageRouter = Router();

messageRouter.get('/:id', (req, res) => {
    const currentId = parseInt(req.params.id);
    if (currentId > 0 && currentId <= getSize()) {
        const currentMessage = getMessage(currentId)
        res.render('index',
            {
                location: 'message',
                user: currentMessage.user,
                added: currentMessage.added,
                title: currentMessage.title,
                text: currentMessage.text,
                color1: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
                color2: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            })
    } else {
        res.status(404).render('index', {location: '404'})
    }
})

module.exports = messageRouter;