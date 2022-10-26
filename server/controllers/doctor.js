import DoctorData from "../models/doctor.js";

export const getDoctors=async(req,res)=> {
    try {
        const allDoctors= await DoctorData.find();
        res.status(200).json(allDoctors);
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createDoctor=async (req,res)=> {
    const doctor=req.body;
  
    const newDoctor=new DoctorData(doctor);
    try {
        // console.log("createeee"+newDoctor);
        await newDoctor.save();
        res.status(201).json(newDoctor);
    } catch (error) {
        console.log("there is error");
        res.status(409).json({ message: error.message })
    }
}

// export const deleteStudent = async (req,res) => {
//     const id = req.params.id;

//     try {
//         await DoctorData.findByIdAndRemove(id).exec();
//         res.send('Successfully Deleted!');
//     } catch (error) {
//         console.log(error);
//     }
// } 