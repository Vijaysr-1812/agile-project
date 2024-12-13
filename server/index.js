const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json()); // Parse incoming JSON data
app.use(cors());         // Enable Cross-Origin Resource Sharing

mongoose.connect("mongodb://localhost:27017/employee", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("Error connecting to MongoDB:", err));

  app.post('/loger', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.status(200).json({ message: "success" });
                } else {
                    return res.status(401).json({ message: "Password is incorrect" });
                }
            } else {
                return res.status(404).json({ message: "User does not exist" });
            }
        })
        .catch(err => res.status(500).json({ message: "Server error", error: err }));
});
app.post('/register', (req, res) => {
    // Use req.body (not 'req.body') to create a new document
    EmployeeModel.create(req.body)
        .then(employees => res.status(201).json(employees)) // Return created document
        .catch(err => res.status(400).json({ error: err.message })); // Handle errors
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
