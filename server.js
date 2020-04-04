const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const route = require("./routes");

const app = express();
const corsOptions = {
	allowHeaders: ["Content-Type", "Accept", "Authorization"],
	allowMethods: ["GET", "PUT", "POST", "OPTIONS"],
	origin: "*"
};
// middlewares
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", route);

var port = (process.env.PORT || '5000');
app.set('port', port);

// start server
app.listen(port, () => console.log(`Server running on ${port}`));
