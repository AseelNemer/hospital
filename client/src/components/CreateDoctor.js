import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';



export default function Create() {

    const [doctor, setDoctor] = useState({

        firstName: '',
        surName: '',
        mobile: '',
        email: '',
        password: '',
        building: '',
        city: '',
        orgNumber: '',
    })

    const createDoctor = () => {
        axios.post('http://localhost:5000/doctors', doctor).then(() => {
            window.location.reload(false);
            //when i add a data it refresh the page
        })

    }
    return (
        <>
            <h2>Create Doctor</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="outlined-basic" label="first name" variant="outlined" value={doctor.firstName} onChange={(event) => {
                    setDoctor({ ...doctor, firstName: event.target.value })
                }} />
                <TextField id="outlined-basic" label="sur name" variant="outlined" value={doctor.surName} onChange={(event) => {
                    setDoctor({ ...doctor, surName: event.target.value })
                }} />
                <TextField id="outlined-basic" label="mobile" variant="outlined" value={doctor.mobile} onChange={(event) => {
                    setDoctor({ ...doctor, mobile: event.target.value })
                }} />
                <TextField id="outlined-basic" label="email" variant="outlined" value={doctor.email} onChange={(event) => {
                    setDoctor({ ...doctor, email: event.target.value })
                }} />
                <TextField id="outlined-basic" label="password" variant="outlined" value={doctor.password} onChange={(event) => {
                    setDoctor({ ...doctor, password: event.target.value })
                }} />
                <TextField id="outlined-basic" label="city" variant="outlined" value={doctor.city} onChange={(event) => {
                    setDoctor({ ...doctor, city: event.target.value })
                }} />
                <TextField id="outlined-basic" label="building" variant="outlined" value={doctor.building} onChange={(event) => {
                    setDoctor({ ...doctor, building: event.target.value })
                }} />
                <TextField id="outlined-basic" label="orgNumber" variant="outlined" value={doctor.orgNumber} onChange={(event) => {
                    setDoctor({ ...doctor, orgNumber: event.target.value })
                }} />


                <Button variant="contained" onClick={createDoctor}>Create</Button>

            </Box>
        </>
    );
}
