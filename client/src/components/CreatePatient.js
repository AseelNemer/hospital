import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";




export default function CreateP() {

    const [patient, setPatient] = useState({

        firstName: 'Hani',
        surName: 'H',
        mobile: '0559697778',
        email: 'p@gamil.com',
        password: '14725869',
        building: 'ii',
        city: 'ii',
        orgNumber: '3692581471',
    })

    const createPatient = () => {
        //console.log("patient");
        axios.post('http://localhost:5000/patients', patient).then(response => { 
            console.log("ss",response)
        })
        .catch(error => {
            console.log("err",error.response)
        });
        // .then(() => {
        //     window.location.reload(false);
        //     //when i add a data it refresh the page
        // })

    }
    return (
        <>
            <h2>Create Patient</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="first name" variant="outlined" value={patient.firstName} onChange={(event) => {
                    setPatient({ ...patient, firstName: event.target.value })
                }} />
                <TextField id="outlined-basic" label="sur name" variant="outlined" value={patient.surName} onChange={(event) => {
                    setPatient({ ...patient, surName: event.target.value })
                }} />
                <TextField id="outlined-basic" label="mobile" variant="outlined" value={patient.mobile} onChange={(event) => {
                    setPatient({ ...patient, mobile: event.target.value })
                }} />
                <TextField id="outlined-basic" label="email" variant="outlined" value={patient.email} onChange={(event) => {
                    setPatient({ ...patient, email: event.target.value })
                }} />
                <TextField id="outlined-basic" label="password" variant="outlined" value={patient.password} onChange={(event) => {
                    setPatient({ ...patient, password: event.target.value })
                }} />
                <TextField id="outlined-basic" label="city" variant="outlined" value={patient.city} onChange={(event) => {
                    setPatient({ ...patient, city: event.target.value })
                }} />
                <TextField id="outlined-basic" label="building" variant="outlined" value={patient.building} onChange={(event) => {
                    setPatient({ ...patient, building: event.target.value })
                }} />
                <TextField id="outlined-basic" label="orgNumber" variant="outlined" value={patient.orgNumber} onChange={(event) => {
                    setPatient({ ...patient, orgNumber: event.target.value })
                }} />


            <Button component={Link} to="/Login" variant="contained" onClick={createPatient}>Create</Button>

            </Box>
        </>
    );
}
