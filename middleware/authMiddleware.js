const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];

    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(200).send({ message: "Auth Failed", success: false });
      } else {
        req.body.userId = decode.userId; //Extract userId from token payload
        next();
      }
    });
  } catch (error) {
    console.log("Middleware error:", error); // Log any other errors
    res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
