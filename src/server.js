require('dotenv').config();
import express from "express";
import configViewEngine from "./config/viewEngine";
import initRoutes from "./routes/web";
import bodyParser from "body-parser";
import cookieParser from 'cookie-parser';
import flash from 'connect-flash';
import methodOverride from 'method-override';
import passPort from "passport";
import session from "./config/session";
var i18n = require('i18n');

let app = express();
app.use(methodOverride('_method'));
app.use(cookieParser('secret'));

app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

i18n.configure({
    locales: ['en', 'vi'],
    register: global,
    fallbacks: {'vi':'en'},
    cookie: 'lang',
    queryParameter: 'lang',
    defaultLocale: 'en',
    directory: __dirname + '/languages',
});

app.use(function(req, res, next) {
    i18n.init(req, res, next);
})


app.use('/change-lang/:lang', (req, res) => { 
    res.cookie('lang', req.params.lang, { maxAge: 900000 });
    res.redirect('back');
});

//config session
session.configSession(app);

configViewEngine(app);

// config Passportjs
app.use(passPort.initialize());
app.use(passPort.session());

initRoutes(app);

let port = process.env.PORT;
app.listen(port || 8080, () => console.log(`P-Covid Care app is running on port ${port}!`));
