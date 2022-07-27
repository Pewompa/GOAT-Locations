const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./router/locationRouter');

connectDB();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
