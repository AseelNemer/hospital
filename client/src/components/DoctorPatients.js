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
import CreateP from './CreatePatient.js'
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';







function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);
const mdTheme = createTheme();

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
            <ThemeProvider theme={mdTheme}>
                <Box sx={{ display: 'flex' }}>
                    <CssBaseline />

                    <Drawer variant="permanent" open={open}>


                    </Drawer>
                    <Box
                        component="main"
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[100]
                                    : theme.palette.grey[900],
                            flexGrow: 1,
                            height: '100vh',
                            overflow: 'auto',
                        }}
                    >
                        <Toolbar />
                        <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={12} lg={12}>

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
                                                        <TableCell><button onClick={() => editpat(patient._id)}
                                                            variant="contained" color="primary">EDIT</button></TableCell>

                                                        <TableCell align="right">
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ pt: 4 }} />
                        </Container>
                    </Box>
                </Box>
            </ThemeProvider>
        </>



    );
}

