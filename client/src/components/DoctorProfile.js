import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Navigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import CreateP from './CreatePatient.js'
import { useNavigate } from "react-router-dom";








export default function Doctorprofile() {

    const [patientsList, setPatientList] = useState([]);


    const [doctor, setDoctor] = useState(
        {
            firstName: '',
            surName: '',
            mobile: '',
            email: '',
        }
    );



    const { id } = useParams();
    //let dic={'doc':doctor}
    //console.log("my id ", id);

    useEffect(() => {


        axios.get(`http://localhost:5000/doctors/${id}`).then((par) => {
            //console.log("params :",par);
            setDoctor(par.data.b);
            setPatientList(par.data.a);
        }, [])

        // axios.post(`http://localhost:5000/doctors/${id}`,doctor).then((par) => {
        //     //console.log("params :",par);

        //     })



    })
    const navigate = useNavigate()

    const open = () => {
        console.log("i am in nevigate");
        navigate(
            "/registerpat", {
            state: {
                idDoctor: id
            }
        }
        );
    };

    const editpat = (idd) => {
        console.log("i am in nevigate");
        navigate(
            "/editpatient", {
            state: {
                idpatient: idd
            }
        }
        );
    };


    return (
        <>
            <h2>doctor Data</h2>
            {/* <Link
                to="/registerpat" state={{ id: "shatha" }}>
                opne nev
            </Link> */}
            <Button onClick={open}
                variant="contained" color="primary">

                Add patient
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
                            <TableCell component="th" scope="row">{doctor.firstName}</TableCell>
                            <TableCell align="right">{doctor.surName}</TableCell>
                            <TableCell align="right">{doctor.mobile}</TableCell>
                            <TableCell align="right">{doctor.email}</TableCell>
                            <TableCell align="right">
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <h2>All patients</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID number</TableCell>

                            <TableCell>First Name</TableCell>
                            <TableCell align="right">Last name</TableCell>
                            <TableCell align="right">Mobile</TableCell>
                            <TableCell align="right">Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {patientsList.map((patient, key) => (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row">
                                    {patient.idnum}
                                </TableCell>
                                <TableCell align="right">{patient.firstName}</TableCell>

                                <TableCell align="right">{patient.surName}</TableCell>
                                <TableCell align="right">{patient.mobile}</TableCell>
                                <TableCell align="right">{patient.email}</TableCell>
                                <TableCell><button onClick={()=>editpat(patient._id)}
                                    variant="contained" color="primary">EDIT</button></TableCell>

                                <TableCell align="right">
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>



    );
}

