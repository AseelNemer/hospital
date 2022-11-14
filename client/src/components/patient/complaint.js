import { useLocation } from "react-router-dom";
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import doctor2 from '../../images/doctor2.png'


export default function Complaintpat() {
    const location = useLocation();
    let idPatient=location.state.idPatient
    let email=location.state.emaill

    
    const history = useNavigate()
    const [complaint, setcomplaint] = useState({
             email: email,
            subject: "",
            contact:"",
            idpatient:idPatient
        })

    const sendcomplaint = () => {
        axios.post('http://localhost:5000/sendcomplaint', complaint) 
            console.log("shatha arar");

            // if (res.data.statuss === "true") {
             //alert("The complaint is add")
               //history(`/patients/${complaint.idpatient}`)
            // }
            // else {
              // alert("succ")
            // }

    
    }


    return (
        <> 
           <h2>Write a complaint</h2>
         <Box sx={{ display: 'flex' }} style={{ backgroundImage: `url(${doctor2})` }} >
                <AppBar component="nav">
                  
                </AppBar>
             
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 5, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    

                    <TextField id="outlined-basic" label="email" variant="outlined" value={email} />
                    <TextField id="outlined-basic" label="subject" variant="outlined"  value={complaint.subject} onChange={(event) => {
                        setcomplaint({ ...complaint, subject: event.target.value })
                    }} />

                    <TextField id="outlined-basic" label="contact" variant="outlined"  value={complaint.contact} onChange={(event) => {
                        setcomplaint({ ...complaint, contact: event.target.value })}}/>

                     <Button variant="contained" onClick={sendcomplaint}>Send</Button>
                    
                </Box>
            </Box>

        </>
    )



}