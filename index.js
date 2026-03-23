const express = require("express");
const cors = require("cors");
const app = express(); // 🔥 এটা missing ছিল

const pool = require("./db");

app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("API running 🚀");
});

// db test route
app.get("/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("DB error");
  }
});

// contact route
const contactRoutes = require("./routes/contact");
app.use("/contact", contactRoutes);

// server start
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});