import mongoose from "mongoose";
import bcrypt from "bcrypt";
// import { isEmail } from "validator";

const doctorSchema = new mongoose.Schema({

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
});

doctorSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

doctorSchema.statics.login = async function (email, password) {
  const doctor = await this.findOne({ email });
  if (doctor) {
    const auth = await bcrypt.compare(password, doctor.password);
    if (auth) {
      return doctor;
    }
    throw Error("Incorrect Password");
  }
  throw Error("Invalid email");
};

const Doctor = mongoose.model("doctor", doctorSchema);

// module.exports = Doctor;
export default Doctor;