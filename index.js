const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// route connect
const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

// ✅ home route (এখানে app use হবে)
app.get("/", (req, res) => {
  res.send("Server running ok");
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});