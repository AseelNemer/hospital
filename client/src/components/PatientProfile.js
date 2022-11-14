import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useParams} from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import 'react-notifications/lib/notifications.css';





export default function PatientProfile() {
    
    const [patient, setPatient] = useState(
        {
            firstName:'',
            surName: '',
            mobile:'',
            email:'',
        }
    );


    const {id} = useParams();
    // console.log(id);

    const navigate = useNavigate()
    const complaint = () => {
         console.log("i am in nevigate",patient.firstName);

        navigate(
            "/complaint", {
            state: {
                idPatient: id,
                firstt:patient.firstName,
                emaill:patient.email
            }
        }
        );
    };
   

    useEffect(() => {
        axios.get(`http://localhost:5000/patients/${id}`).then((patient) => {

            // console.log(doctor.data);
            setPatient(patient.data);
            // console.log("ss",firstname);
        },patient)
        // .then(function (response) {
        //     console.log(response);
        //   })
        
    })


    return (
        <>
            <h2>patient</h2>
            <Button onClick={complaint}
                variant="contained" color="primary">

                Write Complaint
            </Button>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last Name</TableCell>
                            <TableCell align="right">Mobile</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Building</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">{patient.firstName}</TableCell>
                            <TableCell align="right">{patient.surName}</TableCell>
                            <TableCell align="right">{patient.mobile}</TableCell>
                            <TableCell align="right">{patient.email}</TableCell>
                            <TableCell align="right">
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

