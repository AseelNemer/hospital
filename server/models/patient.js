import mongoose from "mongoose";

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
    unique: [true, "Email already Exist"],
    // validate: [isEmail, "Please Enter a valid Email"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
    minlength: [8, "Minimum length of password should must be 8 characters"],
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
    minlength: [10, "Please Enter a valid Mobile Number"],
  },
  doctors:[{type:mongoose.Schema.Types.ObjectId , ref: 'doctor'}]
})

const patient = mongoose.model("patient", patientSchema);

export default patient;