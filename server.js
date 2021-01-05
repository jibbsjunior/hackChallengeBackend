const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require('path');

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

// serve static assets in production
if (process.env.NODE_ENV == 'production') {
	// serve static folder
	app.use(express.static('/build'));

	app.get('*',(req,res)=>res.sendFile(path.resolve()));
}

var port = (process.env.PORT || '5000');
app.set('port', port);

// start server
app.listen(port, () => console.log(`Server running on ${port}`));
