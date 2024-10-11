// Date
const now = new Date()

// Format hour:minute(pm/am) on day/month/year
const date = `${now.getHours() % 12}:${String(now.getMinutes()).padStart(2, '0')}${(now.getHours() / 12) >= 1 && (now.getHours() / 12) < 2 ? 'pm' : 'am'} on ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

// Place Holder Message
const messages = [
    {
        title: "Guess What",
        text: "Hi there!",
        user: "Amando",
        added: date
    },
    {
        title: "Guess What",
        text: "Hello World!",
        user: "Charles",
        added: date
    }
];

// Helper function
const addMessage = (newMessage) => {
    messages.push(newMessage)
}

const getMessages = () => {
    return messages;
}

module.exports = {
    addMessage,
    getMessages
}