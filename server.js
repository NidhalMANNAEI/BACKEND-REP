const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
const adminRoutes = require('./routes/adminRoutes');
const userRoutes = require('./routes/userRoutes');
const campaignRoutes = require('./routes/campaignRoutes');
const transactionRoutes = require('./routes/transactionRoutes');

app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/campaign', campaignRoutes);
app.use('/transaction', transactionRoutes);

app.get('/Profile/', (req,res) => {
    res.send("Here is the User Profile Page");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});