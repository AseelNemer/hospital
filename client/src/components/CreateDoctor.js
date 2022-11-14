import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from 'validator'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import data from './data.json'








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
    const [isError, setIsError] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [selectedCountry, setSelectedCountry] = React.useState();

    // const togglePassword = () => {
    //     // When the handler is invoked
    //     // inverse the boolean state of passwordShown
    //     setPasswordShown(!passwordShown);
    // };

    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };




  




    const createDoctor = (event) => {

        event.preventDefault();

        if (doctor.firstName.trim().length === 0){
            alert('input first name value is empty');
            return false
        }
        if (doctor.surName.trim().length === 0){
            alert('input sur Name  value is empty');
            return false
        }

        if (doctor.mobile.trim().length === 0){
            alert('input mobile value is empty');
            return false
        }

        if (doctor.mobile.trim().length !== 10){
            alert('the mobile must be at  10 characters');
            return false
        }

        if (doctor.email.trim().length === 0){
            alert('input email value is empty');
            return false
        }

        
        if (!(validator.isEmail(doctor.email))) {
   
            alert('Enter valid Email!')
            return false
        }
        if (doctor.password.trim().length === 0){
            alert('input password value is empty');
            return false
        }

        if (doctor.password.trim().length < 8){
            alert(' password must be at least 8 characters ');
            return false
        }

        if (doctor.building.trim().length === 0){
            alert('input building value is empty');
            return false
        }
        if (doctor.orgNumber.length === 0){
            alert('input orgNumber value is empty');
            return false
        }

        if (doctor.city.trim().length === 0){
            alert('input city value is empty');
            return false
        }
    
      









        axios.post('http://localhost:5000/doctors', doctor).then(() => {
                window.location.reload(false);
                //when i add a data it refresh the page
            })

    }

    //const data=JSON.stringify(dataa)
    // console.log(data);


    return (
        <>
            <h2>Create Doctor</h2>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}

                autoComplete="off"
            >
                <TextField id="outlined-basic" required label="first name" variant="outlined" value={doctor.firstName} onChange={(event) => {

                    setDoctor({ ...doctor, firstName: event.target.value })

                }} />
                <TextField id="outlined-basic" required label="sur name" variant="outlined" value={doctor.surName} onChange={(event) => {
                    setDoctor({ ...doctor, surName: event.target.value })
                }} />

                <TextField
                    type="tel"
                    error={isError}
                    value={doctor.mobile}
                    label="Enter Phone Number"
                    inputProps={{ maxLength: 10 }}
                    required
                    onChange={(e) => {
                        setDoctor({ ...doctor, mobile: e.target.value })
                      
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            +972
                        </InputAdornment>,
                    }}

                />


                {/* <TextField id="outlined-basic" label="mobile" variant="outlined" pattern="[1-9]{1}[0-9]{9}" value={doctor.mobile} onChange={(event) => {
                    setDoctor({ ...doctor, mobile: event.target.value })
                }} /> */}
                    <TextField id="outlined-basic" label="email" variant="outlined" required value={doctor.email} onChange={(e) => {

                        //validateEmail(e)

                        setDoctor({ ...doctor, email: e.target.value })
                    }} />
                 
            


                {/* <TextField id="outlined-basic" label="password" variant="outlined" value={doctor.password} onChange={(event) => {
                    setDoctor({ ...doctor, password: event.target.value })
                }} /> */}


                <TextField type={passwordShown ? "text" : "password"} label="password" required onChange={(event) => {
                    setDoctor({ ...doctor, password: event.target.value })

                }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                {/* <button onClick={togglePassword}>Show Password</button> */}

                <TextField id="outlined-basic" label="building" required variant="outlined" value={doctor.building} onChange={(event) => {
                    setDoctor({ ...doctor, building: event.target.value })
                }} />
                {/* <TextField id="outlined-basic" label="city" variant="outlined" value={doctor.city} onChange={(event) => {
                    setDoctor({ ...doctor, city: event.target.value })
                }} /> */}


                <TextField id="outlined-basic" label="orgNumber" required variant="outlined" value={doctor.orgNumber} onChange={(event) => {
                    setDoctor({ ...doctor, orgNumber: event.target.value })
                }} />

                <div id="container">

                    <div>
                        <label>City</label>
                        <select
                            placeholder="Country"
                            required
                            value={selectedCountry}
                            onChange={(e) => {
                                setSelectedCountry(e.target.value)
                                setDoctor({ ...doctor, city: e.target.value })
                            }}
                        >
                            <option>--Choose city--</option>
                            {data.map((value, key) => {
                                return (
                                    <option value={value.name} key={key}>
                                        {value.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>


                </div>




                <Button component={Link} to="/Login" variant="contained" onClick={createDoctor}>Create</Button>

            </Box>
        </>
    );
}
