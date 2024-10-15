// Message Controller
const db = require('../database/queries.js')

// Get all messages
async function getMessages(req, res) {
    try {
        const messages = await db.getAllMessages();
        // Added random color to each message
        const updatedMessages = messages.map(message => ({
            ...message,
            color1: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
            color2: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
        }))

        res.render('index', { location: "index", messages: updatedMessages })
    } catch (err) {
         // Cannot get messages
        console.error('Error fetching messages:', err);
        res.status(500).send('Internal Server Error');
    }
}

// Render form
function renderNewMessages(req, res) {
    res.render('index', { location: "new" });
}

// Add new message
async function addMessage(req, res) {
    try {
        // Getting values
        const title = req.body['form-title'];
        const text = req.body['form-message'];
        const user = req.body['form-user'] == '' ? 'anonymous' : req.body['form-user'];

        await db.insertMessages(user, title, text);
        res.redirect('/')
    } catch (err) {
         // Cannot add message
        console.error("Error adding message:", err);
        res.status(500).send("Internal Server Error");
    }
}

// Get single message
async function getSingleMessage(req, res) {
    const currentId = parseInt(req.params.id);
    try {
        const currentMessage = await db.getMessage(currentId);

        // Check if message exist
        if (!currentMessage) {
            res.status(404).render('index', { location: '404' })
        } else {
            res.render('index',
                {
                    location: 'message',
                    user: currentMessage.user,
                    added: currentMessage.data_created,
                    title: currentMessage.title,
                    text: currentMessage.text,
                    color1: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
                    color2: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`,
                })
        }
    } catch (err) {
        // Cannot get message
        console.error('Error retrieving message:', err);
        res.status(500).render('index', { location: '500' });
    }
}

module.exports = {
    getMessages,
    renderNewMessages,
    addMessage,
    getSingleMessage,
}