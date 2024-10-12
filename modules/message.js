// Format hour:minute(pm/am) on day/month/year
const now = new Date()
const date = `${now.getHours() % 12 == 0 ? 12 : now.getHours() % 12}:${String(now.getMinutes()).padStart(2, '0')}${(now.getHours() / 12) >= 1 && (now.getHours() / 12) < 2 ? 'pm' : 'am'} on ${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`

// Place Holder Message
const messages = [
    {
        id: 1,
        title: "Weekend Hike Suggestions?",
        text: "Hey everyone, I'm planning a weekend hike around the area, and I'm looking for some great trails. Any hidden gems or places you recommend?",
        user: "HikingHero85",
        added: date
    },
    {
        id: 2,
        title: "Unexpected Coding Wins Today!",
        text: "So, I finally solved that tricky bug that had been plaguing my project for weeks! Anyone else have a moment like this recently? Let's celebrate our small victories!",
        user: "CodeWarrior42",
        added: date
    },
    {
        id: 3,
        title: "Need Advice on Moving Cross-Country",
        text: "I'm planning to move to a new city in a couple of months and could use some advice on finding a good place to live, managing the moving process, and adjusting to a new area. Any tips?",
        user: "NomadNate",
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

const getSize = () => {
    return messages.length;
}

const getMessage = (id) => {
   return messages[id - 1]; 
} 

module.exports = {
    addMessage,
    getMessages,
    getSize,
    getMessage,
}