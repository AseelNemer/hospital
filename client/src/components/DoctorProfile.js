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
import { useParams} from 'react-router-dom';




export default function DoctorProfile() {

    const [doctor, setDoctor] = useState(
        {
            firstName:'',
            surName: '',
            mobile:'',
            email:'',
        }
    );
    const {id} = useParams();
    // console.log(id);

    useEffect(() => {
        axios.get(`http://localhost:5000/doctors/${id}`).then((doctor) => {
            // console.log(doctor.data);
            setDoctor(doctor.data);
            // console.log(id);
        },doctor)
        // .then(function (response) {
        //     console.log(response);
        //   })
        
    })


    return (
        <>
            <h2>doctor</h2>
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
        </>
    );
}

