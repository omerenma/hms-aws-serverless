import express = require("express");
import expressWinston from 'express-winston'
require('winston-loggly-bulk')
import winston from 'winston'
const serverless = require("serverless-http");
import dotenv = require("dotenv");
import cors = require("cors");
import cookieParser from 'cookie-parser'
import session from 'express-session'
import {
  userRoute,
  appointmentRoute,
  diagnosisRoute,
  patientRoute,
  admission,
  doctorRoute,
  bookAppointment,
  paystack,
  businnes,
  enquiry,
  comprehendMedical
} from "./routes/index";
import { client, client_dev } from "./database/database";
import deserializeUser from "./middlewares/deserializeUser"
import { responseInterceptor } from "./utils/responseInterceptor";
dotenv.config();

const app =  express();

app.use(express.json());
app.use(cookieParser())


// This deserializeUser middleware function gets called on every request
  // app.use(deserializeUser)

app.use(session({
  secret:process.env.SESSION_SECRET as string,
  saveUninitialized:true,
  cookie: {maxAge: 1000 * 60 * 60 * 24},
  resave:false
}))



let corsOptions = {
  origin: ['https://hms-next.vercel.app', 'http://localhost:3000'],
  credentials:true,
  optionsSuccessStatus: 200,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"]
}

app.use(cors(corsOptions));


client_dev.connect((err) => {
  if (err) {
    console.log("Connection error: ", err.message);
    return;
  }
  console.log("DB connection established successfully!");
});
//client_dev.end()

app.get("/hello", (req: express.Request, res: express.Response) => {
  res.send("Hello Elastic Bean Stalk");
});

//  app.use(responseInterceptor)



app.use('/subscription',  paystack)

app.use("/users", userRoute);
app.use("/appointment", appointmentRoute);
app.use("/diagnosis", diagnosisRoute);
app.use("/patient", patientRoute);
app.use("/admission", admission);
app.use("/doctors", doctorRoute);
app.use("/book_appointments", bookAppointment);
app.use('/business', businnes)
app.use('/enquiry', enquiry)
app.use('/comprehend-mdeical', comprehendMedical)
app.all("*", (req: express.Request, res: express.Response) => {
  res.status(404).send("Page Not Found");
});


app.use((err:any, req: express.Request, res: express.Response, next:express.NextFunction) => {
  res.status(err.status || 500).send()
})
app.listen(5000, () => {
  console.log("Server running on port 5000")
})
export const handler = serverless(app)