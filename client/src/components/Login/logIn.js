import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import doctor2 from '../../images/doctor2.png'


const Login = ({ setLoginUser }) => {
    const history = useNavigate()
    const [doctor, setDoctor] = useState({
        email: "",
        password: ""
    })
    const loginnow = () => {
        axios.post('http://localhost:5000/Login', doctor).then(res => {
            if (res.data.statuss === "true") {
                history(`/doctors/${res.data.user._id}`)
            }
            else {
                alert(res.data.message)
            }
        })


    }
    return (
        <>
            <Box sx={{ display: 'flex' }} style={{ backgroundImage: `url(${doctor2})` }} >
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Hospital
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Link href="#" to='/home'>login</Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 10, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    

                    <TextField id="outlined-basic" label="email" variant="outlined" value={doctor.email} onChange={(event) => {
                        setDoctor({ ...doctor, email: event.target.value })
                    }} />
                    <TextField id="outlined-basic" label="password" variant="outlined" value={doctor.password} onChange={(event) => {
                        setDoctor({ ...doctor, password: event.target.value })
                    }} />
                    <Button variant="contained" onClick={loginnow}>Log in</Button>
                    <h1>if you'r new register here!</h1>
                    <Button component={Link} to="/register" variant="contained" color="primary"> 
                    {/* onClick={()=>{console.log("hhh"+doctor);}}> */}
                      Register
                  </Button>
                    {/* <img
                        src={doctor2}
                        alt="doctor2 pic"
                        className="h-20 my-6 border-2 rounded-full"
                        width="1000" height="1000"
                    /> */}
                </Box>
            </Box>

        </>
    );
}
export default Login