import mongoose from "mongoose";
import pkg from 'mongoose';
const { Schema } = pkg;
const doctorSchema =  mongoose.Schema({

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
     length: [10, "Please Enter a valid Mobile Number"],
     
  },
  email: {
    type: String,
    required: [true, "Please enter email"],
    unique: [true, "Email already Exist"],
    // validate: [isEmail, "Please Enter a valid Email"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
    // minlength: [8, "Minimum length of password should must be 8 characters"],
  },
  
    building: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
    city: {
      type: String,
      required: [true, "Please enter complete Address of contact person"],
    },
  orgNumber: {
    type: String,
    required: [true, "Please enter Mobile Number"],
    // minlength: [10, "Please Enter a valid Mobile Number"],
  },
  sicks:[
    {
      type:Schema.Types.ObjectId,
      ref:"patient"
    }
  ],
  schedule:[
    {
      type:Schema.Types.ObjectId,
      ref:"schedule"
    }
  ]
  
})

const doctor = mongoose.model("doctor", doctorSchema);

export default doctor;