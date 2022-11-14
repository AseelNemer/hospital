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
import "react-toastify/dist/ReactToastify.css";
import './app.css';
import Go from './components/ProfilePages/go.js'
import Profile from './components/ProfilePages/Profile.js'
import CreateP from './components/CreatePatient.js'
import PatientProfile from './components/PatientProfile.js'
import SideBar from './components/SideBar.js';
import DoctorSidebar from './components/DoctorSidebar.js'
import Schedule1 from './components/Schedule.js'
// import { Schedule } from '@material-ui/icons'
// import Profile1 fro

function App() {
  const [healthID, setHealthID] = useState("");
  const [prescriptionID, setPrescriptionID] = useState("");

  const [user, setLoginUser] = useState({
    email: "",
  })
  const [doctorID, setDoctorID] = useState('');

  return (

    <div className="App">
      {/* <Router >
        <div className='appHeader' >
          <NavBar />
        </div> */}
      <div className='appBody'>
        <Routes >
          {/* <Route exact path="/">
              {
                user && user._id ? <Homepage /> : <Login />
              }<Homepage /></Route> */}
          <Route path="/" element={<Init />} />
          <Route path="/PatientLogin" element={<PatientLogin setLoginUser={setLoginUser} />} />
          <Route path="/Login" element={<Login setLoginUser={setLoginUser} />} />
          <Route path="/Homepage" element={<Homepage />} />
          {/* <SideBar> */}
            {/* <Route path='doctors/:id' >
              <Route index element={<DoctorProfile />} />
              <Route path='profile' element={<Profile />} />
              <Route path='/patients/:id' element={<PatientProfile />} /></Route>
             */}


            <Route path='doctors'  element ={<DoctorSidebar/>}>
              <Route path=':id' element={<DoctorProfile />} />
              <Route path=':id/profile' element={<Profile />} />
              <Route path=':id/schedule' element={<Schedule1/>}/>
              {/* <Route path='/patients/:id' element={<PatientProfile />} /> */}

            </Route>


            <Route path='/patients/:id' element={<PatientProfile />} />
            <Route path='/register' element={<Create />} />
            <Route path='/registerpat' element={<CreateP />} />
            <Route path='/profile' element={<Profile user={user} />}></Route>

            {/* </SideBar> */}
            {/* <Route path='/profile1' element={<Profile1 user={user} />}></Route> */}
            {/* <Route path='/doctors/:id' element={<DoctorProfile setLoginUser={setLoginUser}/> }/> */}
            {/* <Route path='/doctors/doctorProf' element={<DoctorProfile />} > */}
            <Route path='/register' element={<Create />} />
            {/* <Route path='/Go' element={<Go />} /> */}

        </Routes>
      </div>
    {/* </Router> */}
    </div >

  );
}

export default App;


