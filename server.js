const express = require("express");
const app = express();

app.use(express.json());

// หน้าแรก
app.get("/", (req, res) => {
  res.send("Hello World");
});

// SCRIPT ROUTE
app.get("/script", (req, res) => {
  res.type("text/plain");
  res.send('Write-Host "Hello from my server"');
});

// LOGIN API
app.post("/Lnw/login", (req, res) => {
  const { username, password } = req.body;

  const mockUser = {
    username: "Q",
    password: "9"
  };

  if (username === mockUser.username && password === mockUser.password) {
    return res.json({
      success: true,
      token: "mock-token-abc123",
      message: "Login success"
    });
  }

  res.status(401).json({
    success: false,
    message: "Invalid username or password"
  });
});

// START SERVER
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});