import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import doctor2 from '../../images/doctor2.png'


const Login = ({ setLoginUser }) => {
    const history = useNavigate()
    const [doctor, setDoctor] = useState({
        email: "",
        password: ""
    })
    const loginnow = () => {
        axios.post('http://localhost:5000/Login', doctor).then(res => {
            if (res.data.statuss === "true") {
                history(`/doctors/${res.data.user._id}`)
            }
            else {
                alert(res.data.message)
            }
        })


    }
    return (
        <>
            <Box sx={{ display: 'flex' }} style={{ backgroundImage: `url(${doctor2})` }} >
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            Hospital
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <Link href="#" to='/home'>login</Link>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': { m: 10, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    

                    <TextField id="outlined-basic" label="email" variant="outlined" value={doctor.email} onChange={(event) => {
                        setDoctor({ ...doctor, email: event.target.value })
                    }} />
                    <TextField id="outlined-basic" label="password" variant="outlined" value={doctor.password} onChange={(event) => {
                        setDoctor({ ...doctor, password: event.target.value })
                    }} />
                    <Button variant="contained" onClick={loginnow}>Log in</Button>
                    <h1>if you'r new register here!</h1>
                    <Button component={Link} to="/register" variant="contained" color="primary"> 
                    {/* onClick={()=>{console.log("hhh"+doctor);}}> */}
                      Register
                  </Button>
                    {/* <img
                        src={doctor2}
                        alt="doctor2 pic"
                        className="h-20 my-6 border-2 rounded-full"
                        width="1000" height="1000"
                    /> */}
                </Box>
            </Box>

        </>
    );
}
export default Login


// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import { Navigate, useNavigate } from "react-router-dom"

// function Copyright(props) {
//     return (
//         <Typography variant="body2" color="text.secondary" align="center" {...props}>
//             {'Copyright © '}
//             <Link color="inherit" href="https://mui.com/">
//                 Your Website
//             </Link>{' '}
//             {new Date().getFullYear()}
//             {'.'}
//         </Typography>
//     );
// }

// const theme = createTheme();

// export default function Login({setLoginUser}) {
//     const [doctor, setDoctor] = useState({
//         email: "",
//         password: ""
//     })
//         const navigate = useNavigate()




//     const loginnow = () => {
//                 axios.post('http://localhost:5000/Login', doctor).then(res => {
//                     if (res.data.statuss === "true") {
//                         navigate(`/doctors/${res.data.user._id}`)
//                         // console.log(res.data.user);
//                         // localStorage.setItem('user', JSON.stringify(res.data))
//                         // localStorage.setItem('token',res.data.token )
//                         // navigate(`/doctors/${res.data.user._id}`)
//                         // console.log(res.data.user.email);
//                         setLoginUser(res.data.user.email)
//                         // navigate.push('/doctors/doctorProf')
                        
//                     }
//                     else {
//                         alert(res.data.message)
//                     }
//                 })
        
        
//             }
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = new FormData(event.currentTarget);
//         console.log({
//             email: doctor.email,
//             password: doctor.password,
//         });
//     };

//     return (
//         <ThemeProvider theme={theme}>
//             <Grid container component="main" sx={{ height: '100vh' }}>
//                 <CssBaseline />
//                 <Grid
//                     item
//                     xs={false}
//                     sm={4}
//                     md={7}
//                     sx={{
//                         backgroundImage: 'url(https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17818.jpg?size=626&ext=jpg&ga=GA1.2.1431154678.1666997445)',
//                         backgroundRepeat: 'no-repeat',
//                         backgroundColor: (t) =>
//                             t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//                         backgroundSize: 'cover',
//                         backgroundPosition: 'center',
//                     }}
//                 />
//                 <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//                     <Box
//                         sx={{
//                             my: 8,
//                             mx: 4,
//                             display: 'flex',
//                             flexDirection: 'column',
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//                             <LockOutlinedIcon />
//                         </Avatar>
//                         <Typography component="h1" variant="h5">
//                             Sign in
//                         </Typography>
//                         <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
//                             <TextField fullWidth id="outlined-basic" label="email" variant="outlined" value={doctor.email} onChange={(event) => {
//                                 setDoctor({ ...doctor, email: event.target.value })
//                             }} />
//                             <TextField fullWidth id="outlined-basic" label="password" variant="outlined" value={doctor.password} onChange={(event) => {
//                                 setDoctor({ ...doctor, password: event.target.value })
//                             }} />
//                             <FormControlLabel
//                                 control={<Checkbox value="remember" color="primary" />}
//                                 label="Remember me"
//                             />
//                             <Button
//                                 type="submit"
//                                 fullWidth
//                                 variant="contained"
//                                 onClick={loginnow}
//                                 sx={{ mt: 3, mb: 2 }}
//                             >
//                                 Sign In
//                             </Button>
//                             <Grid container>
//                                 <Grid item xs>
//                                     <Link href="#" variant="body2">
//                                         Forgot password?
//                                     </Link>
//                                 </Grid>
//                                 <Grid item>
//                                     <Link href="/register" variant="body2" >
//                                         {"Don't have an account? Sign Up"}
//                                     </Link>
//                                 </Grid>
//                             </Grid>
//                             <Copyright sx={{ mt: 5 }} />
//                         </Box>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </ThemeProvider>
//     );
// // }