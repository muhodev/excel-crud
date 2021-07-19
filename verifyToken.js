  
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) return res.status(401).json({
      msg:"Erişim Reddildi",
      success:false
  });
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({
        success:false,
        msg:"Invalid Token"
    });
  }
};

module.exports = auth;