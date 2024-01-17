const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const connectDB = require("./config/dbConnection");

connectDB();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api/voters", require("./routes/voterRoutes"));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));