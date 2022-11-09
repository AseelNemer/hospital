// import React, { useEffect, useState } from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import axios from 'axios';
// import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useParams} from 'react-router-dom';
// import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';




// export default function DoctorProfile() {

//     const [doctor, setDoctor] = useState(
//         {
//             firstName:'',
//             surName: '',
//             mobile:'',
//             email:'',
//         }
//     );
//     const {id} = useParams();




//     useEffect(() => {
//         axios.get(`http://localhost:5000/doctors/${id}`).then((doctor) => {
//             setDoctor(doctor.data);
//         },doctor)

//     })


//     return (
//         <>
//             <h2>doctor</h2>
//             <TableContainer component={Paper}>
//                 <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                     <TableHead>
//                         <TableRow>
//                             <TableCell>First Name</TableCell>
//                             <TableCell align="right">Last Name</TableCell>
//                             <TableCell align="right">Mobile</TableCell>
//                             <TableCell align="right">Email</TableCell>
//                             <TableCell align="right">Building</TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         <TableRow
//                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                         >
//                             <TableCell component="th" scope="row">{doctor.firstName}</TableCell>
//                             <TableCell align="right">{doctor.surName}</TableCell>
//                             <TableCell align="right">{doctor.mobile}</TableCell>
//                             <TableCell align="right">{doctor.email}</TableCell>
//                             <TableCell align="right">
//                             </TableCell>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </TableContainer>
//             {/* <Button component={Link} to="/doctors/:id" variant="contained" >Create</Button> */}
//         </>
//     );
// }







// // import React, { useEffect, useState } from 'react';
// // import { Navigate, useNavigate } from "react-router-dom"
// // import axios from 'axios';


// // const DoctorProfile = () => {
// //     const navigate = useNavigate()
// //     const [userData, setUserData] = useState([]);

// //     useEffect(() => {
// //         let url = "http://localhost:5000/doctors/doctorProf";

// //         const token = localStorage.getItem('user')
// //         axios.get(url, { headers: { "user": token } }).then((res) => {
// //             setUserData(res.data.message);
// //           });
// //         console.log(userData);
// //         if (!token) {
// //             navigate('/Login')
// //         }
// //     })



// //     return (
// //         <div className="card">
// //             <div>HOME</div>
// //             <div>

// //                 <span> {localStorage.getItem('user').firstName} </span>
// //                 <button
// //                     onClick={() => {
// //                         localStorage.clear()
// //                         navigate('/Login')
// //                     }}
// //                 > LOGOUT </button>
// //             </div>



// //         </div>
// //     )
// // }


// // export default DoctorProfile



import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useParams } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeIcon from '@mui/icons-material/Home';
import Chart from './Chart';
import Profile from './Profile.js'
// import {Profile} from './Profile.js'
// import Deposits from './Deposits';
// import Orders from './Orders';

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

export default function DoctorProfile(props){

    const [doctor, setDoctor] = useState(
        {
            firstName: '',
            surName: '',
            mobile: '',
            email: '',
        }
    );
    const { id } = useParams();
    console.log(props);
        const g=`/doctors/${id}/profile`
    useEffect(() => {
        axios.get(`http://localhost:5000/doctors/${id}`).then((doctor) => {
            setDoctor(doctor.data);
            localStorage.setItem("doctor",(doctor));
            console.log('kkkkkkkkk'+doctor.data.firstName);
        }, doctor)

    })
    // console.log(doctor.email);
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px', // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <ListItemButton component={Link} to = '/profile'>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile"  />
                        </ListItemButton >
                        {/* {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems} */}
                    </List>
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
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Chart ></Chart>
                                    {/* <TableContainer component={Paper}>
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
                                    </TableContainer> */}
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: 240,
                                    }}
                                >
                                    <Chart />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                                    <Chart />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

