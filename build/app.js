"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const express = require("express");
const serverless = require("serverless-http");
const dotenv = require("dotenv");
const cors = require("cors");
const index_1 = require("./routes/index");
const database_1 = require("./database/database");
dotenv.config();
const app = express();
app.use(express.json());
let corsOptions = {
    origin: 'https://hms-next.vercel.app',
    credentials: true,
    optionsSuccessStatus: 200,
    methods: ["GET", "POST"]
};
app.use(cors(corsOptions));
database_1.client_dev.connect((err) => {
    if (err) {
        console.log("Connection error: ", err.message);
        return;
    }
    console.log("DB connection established successfully!");
});
//client_dev.end()
app.get("/hello", (req, res) => {
    res.send("Hello Elastic Bean Stalk");
});
app.use('/subscription', index_1.paystack);
app.use("/users", index_1.userRoute);
app.use("/appointment", index_1.appointmentRoute);
app.use("/diagnosis", index_1.diagnosisRoute);
app.use("/patient", index_1.patientRoute);
app.use("/admission", index_1.admission);
app.use("/doctors", index_1.doctorRoute);
app.use("/book_appointments", index_1.bookAppointment);
app.use('/business', index_1.businnes);
app.all("*", (req, res) => {
    res.status(404).send("Page Not Found");
});
app.use((err, req, res, next) => {
    res.status(err.status || 500).send();
});
app.listen(5000, () => {
    console.table("Server running on port 5000");
});
exports.handler = serverless(app);
