import mongoose from "mongoose";
import pkg from 'mongoose';
import doctor from "../models/doctor.js"; 

const { Schema } = pkg;
const patientSchema = new mongoose.Schema({

    firstName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
    surName: {
      type: String,
      required: [true, "Please enter full Name"],
    },
  
  
  mobile: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    // unique: [true, "Email already Exist"],
    // validate: [isEmail, "Please Enter a valid Email"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [8, "Minimum length of password should must be 8 characters"],
  },
  
    idnum: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
      unique: [true, "idnum already Exist"],

    },
    city: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
  orgNumber: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  myDoctor:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"doctor"
  },

  myComplaints:
  [{
    type:mongoose.Schema.Types.ObjectId,
    ref:"complaint"
  }],
  schedule:[
    {
      type:Schema.Types.ObjectId,
      ref:"schedule"
    }
  ]

 })

const patient = mongoose.model("patient", patientSchema);

export default patient;