const express = require('express');
const cors = require("cors");
const session = require("express-session");
const bodyParser = require('body-parser');
const app = express();
const port = process.env.port || 5000;
const UserRoute = require("./routes/UserRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");
const BalianRoute = require("./routes/BalianRoute.js");
const CustomerRoute = require("./routes/CustomerRoute.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'somevalue' }));
app.use(cors({
    origin: 'http://localhost:5000'
}));

app.use(UserRoute);
app.use(AuthRoute);
app.use(BalianRoute);
app.use(CustomerRoute);

// create server 
app.listen(port, () => console.log(`Server running at port: ${port}!`));