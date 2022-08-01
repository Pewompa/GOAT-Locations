const express = require('express');
const app = express();
const port = 4000;
const connectDB = require('./config/db');
const cors = require('cors');
const router = require('./router/locationRouter');
const authRouter = require('./router/authRoute');
const passport = require('passport');
const session = require('express-session');
connectDB();

// app.use(
//   session({
//     secret: 'keyboard cat',
//     resave: false,
//     saveUninitialized: false,
//   })
// );

require('./config/passport')(passport);
// app.use('/auth', require('./router/authRoute'));
app.use(cors());
app.use(express.json());
app.use(router);
app.use(authRouter);
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
