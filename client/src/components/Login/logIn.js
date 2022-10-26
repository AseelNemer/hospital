import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
const Login = ({ setLoginUser }) => {
    const history = useNavigate()
    const [doctor, setDoctor] = useState({
        email: "",
        password: ""
    })






    // export default function Login() {

    //     const [doctor, setDoctor] = useState({

    //         email: '',
    //         password: '',

    //     })

    const loginnow = () => {
        axios.post('http://localhost:5000/Login', doctor).then(res => {
            //console.log(res.data.user);

            if (res.data.statuss === "true") {
                console.log("succ");
                //setLoginUser(res.data.user)
                history('/homepage')
            }
            else {

                alert(res.data.message)
            }
        })

    }
    return (
        <>
            <h2>Log in Doctor</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
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

            </Box>
        </>
    );
}
export default Login