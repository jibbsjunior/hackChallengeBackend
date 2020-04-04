const express = require("express");

const dummyData = require("../dummy");

const router = express.Router();

/**
 * @route GET http:localhost:PORT/api/test
 * @desc Tests route
 * @access Public
 * @return { msg: "send data to the front end"}
 */
router.get("/test", (req, res) =>
	// res.status(200).json({ msg: "Route works!" })
	res.send(dummyData)	
);

module.exports = router;
