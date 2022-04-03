const express = require("express");
const app = express();
const indexRouter = require('./routes/index')
const userRouter = require('./routes/user')
const PORT = process.env.PORT || 3000;

/* Seteo  */
app.use(express.static("public"));
app.set('view engine', 'ejs');

/* Rutas  */
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/user', userRouter);



app.listen(PORT, () => console.log("running on port 3000"));
