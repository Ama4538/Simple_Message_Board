// Main App
const express = require('express');
const path = require('node:path')
const app = express();
const PORT = 8080;

// Routers
const indexRouter = require('./routes/indexRoute.js');
const newMessageRouter = require('./routes/newMessageRoute.js');
const messageRouter = require('./routes/messageRoute.js');

// Set view template engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Set up static assets
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));
app.use('/', indexRouter);
app.use('/message', messageRouter);
app.use('/new', newMessageRouter);

// Catch-all route for undefined paths (404)
app.use((req, res) => {
    res.status(404).render('index', { location: '404' });
});


// Listen
app.listen(PORT, () => {
    console.log(`Simple Message Board - listening on http://localhost:${PORT}`);
})
