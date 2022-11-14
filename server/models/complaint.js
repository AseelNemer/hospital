import mongoose from "mongoose";
import pkg from 'mongoose';
import patient from "../models/patient.js"; 

const { Schema } = pkg;
const complaintSchema = new mongoose.Schema({

   
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "email already Exist"],

    // validate: [isEmail, "Please Enter a valid Email"],
  },

  subject: {
    type: String,
    required: [true, "Please enter subject"],
    minlength: [4, "Minimum length of password should must be 8 characters"],
    unique: [true, "subject already Exist"],

  },

  contact: {
    type: String,
    required: [true, "Please enter contact"],
    minlength: [4, "Minimum length of password should must be 8 characters"],
  },
 
  idpatient:
  {
    type:mongoose.Schema.Types.ObjectId,
    ref:"patient"
  }
 })

const complaint = mongoose.model("complaint", complaintSchema);

export default complaint;