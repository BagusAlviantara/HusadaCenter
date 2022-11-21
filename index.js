const express = require('express');
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const dotenv = require("dotenv").config();
const session = require("express-session");
const bodyParser = require('body-parser');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const port = process.env.PORT;
const UserRoute = require("./routes/UserRoute.js");
const AuthRoute = require("./routes/AuthRoute.js");
const BalianRoute = require("./routes/BalianRoute.js");
const CustomerRoute = require("./routes/CustomerRoute.js");
const PengobatanRoute = require("./routes/PengobatanRoute.js");
const AlternatifRoute = require("./routes/AlternatifBalianRoute.js");
const Obat = require("./routes/ObatRoute.js");
const Transaction = require("./routes/TransactionRoute.js");
const Payment = require("./routes/PaymentRoute.js");
const Midtrans = require("./routes/MidtransRoute.js");
//const cookieSession = require('cookie-session')
const { allowedDomains } = require("./config/server.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(helmet());
app.use(compression());
app.use(session({
    secret: 'somevalue',
    resave: true,
    saveUninitialized: false
}));
app.use(cors({
    origin: allowedDomains,
    credentials: true
}));
const corsOptions = {
    optionsSuccessStatus: 200,
    credentials: true,
    origin: 'http://localhost:3000',
    secret: "sessionss"
}
app.use(cors(corsOptions));

app.use(UserRoute);
app.use(AuthRoute);
app.use(BalianRoute);
app.use(CustomerRoute);
app.use(PengobatanRoute);
app.use(AlternatifRoute);
app.use(Obat);
app.use(Transaction);
app.use(Payment);
app.use(Midtrans);

app.get('/api', (req, res) => {
    return res.send("Hello World")
});
//google strategy
passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "https://localhost:3000/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        User.findOrCreate({ googleId: profile.id }, function(err, user) {
            return cb(err, user);
        });
    }
));

app.get('/auth/google',
    passport.authenticate('google', { scope: ['profile'] }));

app.get('/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

// create server 
app.listen(port, () => console.log(`Server running at port: ${port}!`));