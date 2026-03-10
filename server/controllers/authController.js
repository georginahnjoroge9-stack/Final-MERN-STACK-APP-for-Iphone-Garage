//auth controller for login/register
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//Register a new user
exports.register = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPw = await bcrypt.hash(password, 10);
    const User = new User({ email, password: hashedPw, role });
    await User.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//Login user and return JWT token
exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || await bcrypt .compare(password,user.password)) {
            return res.status(401).json({ error: "Invalid credentials" });
        }
        const token = jwt.sign({ Id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, role: user.role });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

