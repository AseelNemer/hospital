// import mongoose from "mongoose";
// import pkg from 'mongoose';

// const { Schema } = pkg;
// const scheduleSchema = new mongoose.Schema({

//   Date: {
//       type: String,
//       required: [true, "Please enter start Date"],
//     },
//     startTime: {
//         type: String,
//         required: [true, "Please enter start Time"],
//       },
//       endTime: {
//         type: String,
//         required: [true, "Please enter end Time"],
//       },
  
//       title: {
//     type: String,
//     required: [true, "Please enter title"],
//     // minlength: [10, "Please Enter a valid title"],
//   },
//   doctorID : {
//     type: String,
//     required: [true, "Please enter end Time"],
//   },
//   patientID: {
//     type: String,
//     required: [true, "Please enter end Time"],
//   },
//  })

// const schedule = mongoose.model("schedule", scheduleSchema);

// export default schedule;



import mongoose from "mongoose";
import pkg from 'mongoose';

const { Schema } = pkg;
const scheduleSchema = new mongoose.Schema({



  start:{
    type:Date,
  },
  end :{
    type:Date,
  },

  Date: {
      type: String,
      required: [true, "Please enter start Date"],
    },
    startTime: {
        type: String,
        required: [true, "Please enter start Time"],
      },
      endTime: {
        type: String,
        required: [true, "Please enter end Time"],
      },
  
      title: {
    type: String,
    required: [true, "Please enter title"],
    // minlength: [10, "Please Enter a valid title"],
  },
  doctorID : {
    type: String,
    required: [true, "Please enter end Time"],
  },
  patientID: {
    type: String,
    required: [true, "Please enter end Time"],
  },
 })

const schedule = mongoose.model("schedule", scheduleSchema);

export default schedule;