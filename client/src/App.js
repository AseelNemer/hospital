
import Login from './components/Login/logIn.js'
import Homepage from './components/homepage/homepage.js'

import { BrowserRouter as Router, Routes, Route , redirect} from 'react-router-dom'
import { useState } from 'react';
function App() {
  const [user, setLoginUser] = useState({

  })

  return (

    <div className="App">
{/* <Route path="/" element={<Home />} /> */}

      {/* <Login/> */}
      <Router>
        <Routes>
        
        <Route path="/" element={<Login setLoginUser={setLoginUser} />} />
        <Route path="/Homepage" element={<Homepage />}/>
          {/* <Route path="/Register"><Register /></Route> */}
        </Routes>

      </Router>



    </div>

  );
}

export default App;
