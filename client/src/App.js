
import Login from './components/Login/logIn.js'
import PatientLogin from './components/Login/patientLogin.js'
import Homepage from './components/homepage/homepage.js'
import Init from './components/initPage.js'
import DoctorProfile from './components/DoctorProfile.js'
import CreatePatient from './components/CreatePatient.js'
import Create from './components/CreateDoctor.js'
import { BrowserRouter as Router, Routes, Route, redirect } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [healthID, setHealthID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");
  const [toastShow, setToastShow] = useState(false);
  const [toastCondition, settoastCondition] = useState({
    status: "",
    message: "",
  });

  if (toastShow) {
    if (toastCondition.status === "success") {
      toast.success(toastCondition.message);
    } else if (toastCondition.status === "error") {
      toast.error(toastCondition.message);
    } else if (toastCondition.status === "warning") {
      toast.warn(toastCondition.message);
    } else if (toastCondition.status == "info") {
      toast.info(toastCondition.message);
    }
    settoastCondition({
      status: "",
      message: "",
    });
    setToastShow(false);
  }
  const [user, setLoginUser] = useState({

  })

  return (

    <div className="App">
      {/* <Route path="/" element={<Home />} /> */}

      {/* <Login/> */}
      <Router>
        <Routes>
          {/* <Route path="/" element={<Init settoastCondition={settoastCondition}
              setToastShow={setToastShow} />} /> */}
              <Route path="/" element={<Init/>} />
          <Route path="/PatientLogin" element={<PatientLogin setLoginUser={setLoginUser} />} />
          <Route path="Login" element={<Login
          setLoginUser={setLoginUser}
            settoastCondition={settoastCondition}
            setToastShow={setToastShow}
          />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path='/doctors/:id' element={<DoctorProfile/>}/>
          <Route path='/register' element={<Create/>}/>


          {/* <Route path="/Register"><Register /></Route> */}
        </Routes>

      </Router>



    </div>

  );
}

export default App;


