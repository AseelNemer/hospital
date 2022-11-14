import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import InputAdornment from "@material-ui/core/InputAdornment";
import validator from 'validator'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import data from './data.json'





export default function CreateP() {
    const location = useLocation();
    let iddoctor=location.state,idDoctor
    //const { state } = state
   //console.log("state:",iddoctor);

    const [patient, setPatient] = useState({

        firstName: '',
        surName: '',
        mobile: '',
        email: '',
        password: '',
        idnum: '',
        city: '',
        orgNumber: '',
        myDoctor:iddoctor.idDoctor

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

    const createPatient = (event) => {
        event.preventDefault();

        if (patient.firstName.trim().length === 0){
            alert('input first name value is empty');
            return false
        }
        if (patient.surName.trim().length === 0){
            alert('input sur Name  value is empty');
            return false
        }

        if (patient.mobile.trim().length === 0){
            alert('input mobile value is empty');
            return false
        }

        if (patient.mobile.trim().length !== 10){
            alert('the mobile must be at  10 characters');
            return false
        }


        if (patient.email.trim().length === 0){
            alert('input email value is empty');
            return false
        }

        if (!(validator.isEmail(patient.email))) {
   
            alert('Enter valid Email!')
            return false
        }

        if (patient.password.trim().length === 0){
            alert('input password value is empty');
            return false
        }

        if (patient.password.trim().length < 8){
            alert(' password must be at least 8 characters ');
            return false
        }
       
        
        if (patient.city.trim().length === 0){
            alert('input city value is empty');
            return false
        }

        if (patient.idnum.trim().length === 0){
            alert('input id number value is empty');
            return false
        }

        if (patient.idnum.trim().length !==9){
            alert('input id number must be at least 9');
            return false
        }

        if (patient.orgNumber.length === 0){
            alert('input orgNumber value is empty');
            return false
        }

     
        
        //console.log("patient");
        // const par={"pat":patient,"doc":emaildoc}

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
                  <TextField
                    type="tel"
                    error={isError}
                    value={patient.mobile}
                    label="Enter Phone Number"
                    inputProps={{ maxLength: 10 }}
                    required
                    onChange={(e) => {
                        setPatient({ ...patient, mobile: e.target.value })
                      
                    }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">
                            +972
                        </InputAdornment>,
                    }}

                />
                <TextField id="outlined-basic" label="email" variant="outlined" value={patient.email} onChange={(event) => {
                    setPatient({ ...patient, email: event.target.value })
                }} />
               <TextField type={passwordShown ? "text" : "password"} label="password" required onChange={(event) => {
                    setPatient({ ...patient, password: event.target.value })

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
                <div>
                        <label>City</label>
                        <select
                            placeholder="Country"
                            required
                            value={selectedCountry}
                            onChange={(e) => {
                                setSelectedCountry(e.target.value)
                                setPatient({ ...patient, city: e.target.value })
                            }}
                        >
                            <option> --Choose city-- </option>
                            {data.map((value, key) => {
                                return (
                                    <option value={value.name} key={key}>
                                        {value.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                <TextField id="outlined-basic" label="ID number" variant="outlined" value={patient.idnum} onChange={(event) => {
                    setPatient({ ...patient, idnum: event.target.value })
                }} />
                <TextField id="outlined-basic" label="orgNumber" variant="outlined" value={patient.orgNumber} onChange={(event) => {
                    setPatient({ ...patient, orgNumber: event.target.value })
                }} />


            <Button component={Link} to="/Login" variant="contained" onClick={createPatient}>Create</Button>

            </Box>
        </>
    );
}
