require("dotenv").config();
const express = require("express");
const session = require("express-session");
const methodOverride = require("method-override");
const passport = require("passport");
const mongoStore = require("connect-mongo");
const path = require("path");
const app = express();
const PORT = 3000 || process.env.PORT;

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
      mongoUrl: process.env.MONGODB_URI,
    }),
    cookie: { maxAge: 3600000 },
  })
);

const connectDB = require("./server/config/db");
const expressLayouts = require("express-ejs-layouts");

const dashboardRouter = require("./server/routes/dashboard");
const indexRouter = require("./server/routes/index");
const authRouter = require("./server/routes/auth");

app.set("view engine", "ejs");
app.set("layout", "./layouts/main");

app.use(passport.initialize());
app.use(passport.session());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);
app.use(methodOverride("_method"));

connectDB();

app.use("/", authRouter);
app.use("/", indexRouter);
app.use("/", dashboardRouter);

app.get("*", function (req, res) {
  res.status(404).render("404");
});

app.listen(PORT, () => {
  console.log("Listening at PORT :", PORT);
});
