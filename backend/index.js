const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
// const UserRoute = require('./routes/UserRoute');
const cors = require('cors');
require('dotenv').config();


dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.use(express.json());
//routes
const UserRoute = require('./routes/UserRoute');
app.use('/api/users', UserRoute);

const talkRoute = require('./routes/TalkRoute');    
app.use('/api/talk', talkRoute);   

const journalRoute = require('./routes/JournalRoute');
app.use('/api/journal', journalRoute);

const aiRoute = require('./routes/aiRoute');
app.use('/api/ai', aiRoute);





app.get("/", (req, res) => {
  res.send("Dhyana Backend is Running");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
