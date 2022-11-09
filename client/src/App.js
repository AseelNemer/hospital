import Login from './components/Login/logIn.js'
import PatientLogin from './components/Login/patientLogin.js'
import Homepage from './components/homepage/homepage.js'
import Init from './components/homepage/initPage.js'
import DoctorProfile from './components/ProfilePages/DoctorProfile.js'
import CreatePatient from './components/CreatePages/CreatePatient'
import NavBar from './components/NavBar/NavBar.js'
import Create from './components/CreatePages/CreateDoctor.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './app.css';
import Go from './components/ProfilePages/go.js'
import Profile from './components/ProfilePages/Profile.js'
import CreateP from './components/CreatePatient.js'
import PatientProfile from './components/PatientProfile.js'

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
    email: "",
})
  const [doctorID, setDoctorID] = useState('');

  return (

    <div className="App">
      <Router >
        <div className='appHeader' class='appHeader'>
          <NavBar />
        </div>
        <div className='appBody'>
          <Routes >
            {/* <Route exact path="/">
              {
                user && user._id ? <Homepage /> : <Login />
              }<Homepage /></Route> */}
            <Route path="/" element={<Init />} />
            <Route path="/PatientLogin" element={<PatientLogin setLoginUser={setLoginUser} />} />
            <Route path="/Login" element={<Login
              setLoginUser={setLoginUser}
            />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path='/doctors/:id'>
            {console.log(user)}

              <Route index element={<DoctorProfile
                user={user}
              />} />
              {/* <Route path='/profile' element={<Profile
                user={user}
              />} /> */}
            </Route> 
            <Route path='/patients/:id' element={<PatientProfile/>}/>
          <Route path='/register' element={<Create/>}/>
          <Route path='/registerpat' element={<CreateP/>}/>


            <Route path='/profile' element={<Profile  user={user}
             />}>
              {console.log(user)} </Route>

            {/* <Route path='/doctors/:id' element={<DoctorProfile setLoginUser={setLoginUser}/> }/> */}
            {/* <Route path='/doctors/doctorProf' element={<DoctorProfile />} > */}
            <Route path='/register' element={<Create />} />
            {/* <Route path='/Go' element={<Go />} /> */}

          </Routes>
        </div>
      </Router>
    </div>

  );
}

export default App;


