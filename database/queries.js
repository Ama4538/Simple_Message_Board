const pool = require('./pool.js');

// Get all messages
async function getAllMessages() {
    // Returns array
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

// Parameterization of queries to prevent sql injections
async function insertMessages(user, title, text) {
    await pool.query("INSERT INTO messages (\"user\", title, text) VALUES ($1, $2, $3)", [user, title, text])
}

async function getMessage(id) {
    const {rows} = await pool.query('SELECT * FROM messages WHERE id = $1', [id]);
    return rows[0];
}

module.exports = {
    getAllMessages,
    insertMessages,
    getMessage
}