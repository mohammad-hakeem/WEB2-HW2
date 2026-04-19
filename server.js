require("dotenv").config();
const express = require("express");
const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");
const dietRoutes = require("./routes/dietRoutes");

app.use("/api/users", userRoutes);
app.use("/api/diets", dietRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});