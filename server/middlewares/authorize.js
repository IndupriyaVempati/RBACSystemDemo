const jwt = require("jsonwebtoken");

const authorize = (roles) => (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) return res.status(401).json({ error: "Access Denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    if (!roles.includes(decoded.role))
      return res.status(403).json({ error: "Forbidden" });
    next();
  } catch (error) {
    res.status(400).json({ error: "Invalid Token" });
  }
};

module.exports = authorize;
