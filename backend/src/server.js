require("dotenv").config();

console.log(process.env.MONGODB_URI);

const app = require("./app");

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});