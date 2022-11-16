// import format from "date-fns/format";
// import getDay from "date-fns/getDay";
// import parse from "date-fns/parse";
// import startOfWeek from "date-fns/startOfWeek";
// import React, { useEffect, useState } from "react";
// import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import moment from "moment";
// import "react-datepicker/dist/react-datepicker.css";
// import dayjs from 'dayjs';
// import Stack from '@mui/material/Stack';
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { useLocation } from "react-router-dom";
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import { getToolbarUtilityClass } from "@mui/material";
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import Badge from '@mui/material/Badge';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { Link, NavLink } from 'react-router-dom';

// const localizer = momentLocalizer(moment);



// let events = [
//   // {
//   //   title: "Big Meeting",
//   //   start: new Date(2022, 11, 0, 12, 0, 0, 0),
//   //   end: new Date(2022, 11, 0, 13, 0, 0, 0),
//   // },
//   // {
//   //   title: "Vacation",
//   //   start: new Date(2021, 6, 7),
//   //   end: new Date(2021, 6, 10),
//   // },
//   // {
//   //   title: "Conference",
//   //   start: new Date(2021, 6, 20),
//   //   end: new Date(2021, 6, 23),
//   // },
// ];

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== 'open',
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
//   ({ theme, open }) => ({
//     '& .MuiDrawer-paper': {
//       position: 'relative',
//       whiteSpace: 'nowrap',
//       width: drawerWidth,
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       boxSizing: 'border-box',
//       ...(!open && {
//         overflowX: 'hidden',
//         transition: theme.transitions.create('width', {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.leavingScreen,
//         }),
//         width: theme.spacing(7),
//         [theme.breakpoints.up('sm')]: {
//           width: theme.spacing(9),
//         },
//       }),
//     },
//   }),
// );

// const mdTheme = createTheme();

// function Schedule1() {
//   const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", patientName: "" });
//   const [allEvents, setAllEvents] = useState([]);
//   const [title, settitle] = React.useState(null);
//   const [start, setStart] = React.useState(null);
//   const [end, setEnd] = React.useState(null);
//   const [date, setDate] = useState(null);
//   const location = useLocation();
//   let iddoctor = location.state, idDoctor


//   // console.log(date.$y);
//   // console.log(start.$H);
//   // console.log(end.$H);

//   const [schedule, setSchedule] = useState({

//     Date: '',
//     startTime: '',
//     endTime: '',
//     title: 'new title',
//     doctorID: iddoctor.idDoctor,
//     patientID: '1',


//   })
//   const [patientsList, setPatientList] = useState([]);
//   const [doctor, setDoctor] = useState(null);
//   const [schedulesList, setScheduleList] = useState([]);

//   const [selectedP, setSelectedP] = React.useState();

//   useEffect(() => {
//     axios.get(`http://localhost:5000/doctors/${iddoctor.idDoctor}`).then((par) => {
//       setPatientList(par.data.a);
//       setDoctor(par.data.b);
//       setScheduleList(par.data.s);
//       setEvents();
//       // doctor=par.data.b;
//       // console.log(par.data.b);
//       // console.log(patientsList);
//       // console.log(doctor);
//       // setAllEvents(events);

//       // buildSchedule();
//     }, [])
//     // console.log(patientsList[0]);
//     // console.log(selectedP);


//   })

//   const setEvents =( )=> {
//     events=[];
//       schedulesList.map(s=>{
//         if (typeof s.Date === 'string' && typeof s.startTime === 'string' && typeof s.endTime === 'string') {
//           let d = s.Date.split("/");
//           // console.log(d);
//           let  st = s.startTime.split(":");
//           let e = s.endTime.split(":");
//           newEvent.title = s.title;
//           newEvent.start = new Date(d[2], d[0]-1, d[1], st[0], st[1], 0, 0);
//           newEvent.end = new Date(d[2], d[0]-1, d[1], e[0], e[1], 0, 0);
//           console.log(newEvent);
//           // console.log(newEvent);
//           events.push(newEvent);
//           // console.log(events);
          
//           // handleAddEvent();
//     // window.location.reload(false);

//         }
//       })
//       setAllEvents(events);
//       console.log(allEvents);

//   }

//   const buildSchedule = () => {
//     // console.log(doctor);
//     // if(){
//     // console.log("yaaaaaaaas");
//     let  arr = doctor.schedule;
//     // events=[];
//     setAllEvents([]);
//     arr.map(s => {
//       axios.get(`http://localhost:5000/schedules/${s}`).then((par) => {
//         // console.log("arr" +arr);
//         if (typeof par.data.Date === 'string' && typeof par.data.startTime === 'string' && typeof par.data.endTime === 'string') {
//           let d = par.data.Date.split("/");
//           // console.log(d);
//           let  st = par.data.startTime.split(":");
//           let e = par.data.endTime.split(":");
//           newEvent.title = par.data.title;
//           newEvent.start = new Date(d[2], d[0]-1, d[1], st[0], st[1], 0, 0);
//           newEvent.end = new Date(d[2], d[0]-1, d[1], e[0], e[1], 0, 0);
//           // console.log(newEvent);
//           events.push(newEvent);
//           // console.log(events);
          
//           // handleAddEvent();
//           setAllEvents([...allEvents, newEvent]);
//     // window.location.reload(false);

//         }
//       })
     
//     }); 
//               // console.log(events);

//     // setAllEvents([...allEvents, events]);
//     // setAllEvents(events);
//     console.log(allEvents);
//     // }
//   }


//   const createSchedule = () => {
//     let d = date.$M + 1 + "/" + date.$D + "/" + date.$y;
//     let s = start.$H + ":" + start.$m;
//     let e = end.$H + ":" + end.$m;
//     // console.log(start);
//     // console.log(s);
//     // setSchedule({ ...schedule, Date : d})
//     // setSchedule({ ...schedule, startTime : s})
//     // setSchedule({ ...schedule, endTime : e})
//     schedule.Date = d;
//     schedule.startTime = s;
//     schedule.endTime = e;

//     // console.log(schedule);

//     newEvent.title = schedule.title;
//     newEvent.start = new Date(date.$y, date.$M, date.$D, start.$H, start.$m, 0, 0);
//     newEvent.end = new Date(date.$y, date.$M, date.$D, end.$H, end.$m, 0, 0);

//     go();
//     handleAddEvent();
//     // setAllEvents([...allEvents, newEvent]);
//     // window.location.reload(false);

//   }

//   const go = () => {
//     axios.post('http://localhost:5000/schedules', schedule).then(res => {

//     })
//   }
//   function handleAddEvent() {

//     for (let i = 0; i < allEvents.length; i++) {

//       const d1 = new Date(allEvents[i].start);
//       const d2 = new Date(newEvent.start);
//       const d3 = new Date(allEvents[i].end);
//       const d4 = new Date(newEvent.end);
//       /*
//           console.log(d1 <= d2);
//           console.log(d2 <= d3);
//           console.log(d1 <= d4);
//           console.log(d4 <= d3);
//             */

//       if (
//         ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
//           (d4 <= d3)) || ((d1==d2) && (d3==d4))
//       ) {
//         // alert("CLASH");
//         break;
//       }

//     }


//     setAllEvents([...allEvents, newEvent]);
//     // window.location.reload(false);

//   }


//   return (
//     <ThemeProvider theme={mdTheme}>
//       <Box sx={{ display: 'flex' }}>
//         <CssBaseline />

//         <Drawer variant="permanent" open={true}>


//         </Drawer>
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === 'light'
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: '100vh',
//             overflow: 'auto',
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} md={12} lg={12}>

//                 <div className="App">
//                   <h1>Calendar</h1>
//                   <h2>Add New Event</h2>
//                   <div>
//                     <input type="text" placeholder="title" style={{ width: "20%", marginRight: "10px" }} value={schedule.title} onChange={(event) => {
//                       setSchedule({ ...schedule, title: event.target.value })
//                     }} />        {/* <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
//         <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <DatePicker
//                         label="Date"
//                         value={date}
//                         onChange={(newValue) => {
//                           setDate(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} />} />
//                       <TimePicker
//                         ampmInClock
//                         openTo="hours"
//                         views={['hours', 'minutes']}
//                         inputFormat="HH:mm"
//                         mask="__:__"
//                         label="from"
//                         value={start}
//                         onChange={(newValue) => {
//                           setStart(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} />}
//                       />
//                       <TimePicker
//                         ampmInClock
//                         openTo="hours"
//                         views={['hours', 'minutes']}
//                         inputFormat="HH:mm"
//                         mask="__:__"
//                         label="to"
//                         value={end}
//                         onChange={(newValue) => {
//                           setEnd(newValue);
//                         }}
//                         renderInput={(params) => <TextField {...params} />}
//                       />
//                     </LocalizationProvider>
//                     {/* <input type="text" placeholder="patientID" style={{ width: "20%", marginRight: "10px" }} value={schedule.patientID} onChange={(event) => {
//                         setSchedule({ ...schedule, patientID: event.target.value })
//                       }} /> */}

//                     <div>
//                       <select
//                         placeholder="Patient"
//                         required
//                         value={selectedP}
//                         onChange={(e) => {
//                           setSelectedP(e.target.value)
//                           // setPatient({ ...patient, city: e.target.value })
//                           setSchedule({ ...schedule, patientID: e.target.value })

//                         }}
//                       >
//                         <option> --Choose Patient-- </option>
//                         {patientsList.map((value, key) => {
//                           return (
//                             <option value={value._id} key={key}>
//                               {value.firstName}
//                             </option>
//                           );
//                         })}
//                       </select>

//                     </div>

//                     <button stlye={{ marginTop: "10px" }} onClick={createSchedule}>
//                       Add Event
//                     </button>
//                   </div>
//                   <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
//                 </div>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }

// export default Schedule1;










import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useLocation } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { getToolbarUtilityClass } from "@mui/material";
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
import { Link, NavLink } from 'react-router-dom';

const localizer = momentLocalizer(moment);



let events = [
  // {
  //   title: "Big Meeting",
  //   start: new Date(2022, 11, 0, 12, 0, 0, 0),
  //   end: new Date(2022, 11, 0, 13, 0, 0, 0),
  // },
  // {
  //   title: "Vacation",
  //   start: new Date(2021, 6, 7),
  //   end: new Date(2021, 6, 10),
  // },
  // {
  //   title: "Conference",
  //   start: new Date(2021, 6, 20),
  //   end: new Date(2021, 6, 23),
  // },
];

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

function Schedule1() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "", patientName: "" });
  const [allEvents, setAllEvents] = useState([]);
  const [title, settitle] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [date, setDate] = useState(null);
  const location = useLocation();
  let iddoctor = location.state, idDoctor


  // console.log(date.$y);
  // console.log(start.$H);
  // console.log(end.$H);

  const [schedule, setSchedule] = useState({

    start:new Date(),
    end: new Date(),
    Date: '',
    startTime: '',
    endTime: '',
    title: 'new title',
    doctorID: iddoctor.idDoctor,
    patientID: '1',


  })
  const [patientsList, setPatientList] = useState([]);
  const [doctor, setDoctor] = useState(null);
  const [schedulesList, setScheduleList] = useState([]);

  const [selectedP, setSelectedP] = React.useState();

  useEffect(() => {
    axios.get(`http://localhost:5000/doctors/${iddoctor.idDoctor}`).then((par) => {
      setPatientList(par.data.a);
      setDoctor(par.data.b);
      setScheduleList(par.data.s);
      // setEvents();
      // doctor=par.data.b;
      // console.log(par.data.b);
      // console.log(patientsList);
      // console.log(doctor);
      // setAllEvents(events);

      // buildSchedule();
    }, [])
    // console.log(patientsList[0]);
    // console.log(selectedP);


  })

  const setEvents =( )=> {
    events=[];
      schedulesList.map(s=>{
        if (typeof s.Date === 'string' && typeof s.startTime === 'string' && typeof s.endTime === 'string') {
          let d = s.Date.split("/");
          // console.log(d);
          let  st = s.startTime.split(":");
          let e = s.endTime.split(":");
          newEvent.title = s.title;
          newEvent.start = new Date(d[2], d[0]-1, d[1], st[0], st[1], 0, 0);
          newEvent.end = new Date(d[2], d[0]-1, d[1], e[0], e[1], 0, 0);
          console.log(newEvent);
          // console.log(newEvent);
          events.push(newEvent);
          // console.log(events);
          
          // handleAddEvent();
    // window.location.reload(false);

        }
      })
      setAllEvents(events);
      console.log(allEvents);

  }

  const buildSchedule = () => {
    // console.log(doctor);
    // if(){
    // console.log("yaaaaaaaas");
    let  arr = doctor.schedule;
    // events=[];
    setAllEvents([]);
    arr.map(s => {
      axios.get(`http://localhost:5000/schedules/${s}`).then((par) => {
        // console.log("arr" +arr);
        if (typeof par.data.Date === 'string' && typeof par.data.startTime === 'string' && typeof par.data.endTime === 'string') {
          let d = par.data.Date.split("/");
          // console.log(d);
          let  st = par.data.startTime.split(":");
          let e = par.data.endTime.split(":");
          newEvent.title = par.data.title;
          newEvent.start = new Date(d[2], d[0]-1, d[1], st[0], st[1], 0, 0);
          newEvent.end = new Date(d[2], d[0]-1, d[1], e[0], e[1], 0, 0);
          // console.log(newEvent);
          events.push(newEvent);
          // console.log(events);
          
          // handleAddEvent();
          setAllEvents([...allEvents, newEvent]);
    // window.location.reload(false);

        }
      })
     
    }); 
              // console.log(events);

    // setAllEvents([...allEvents, events]);
    // setAllEvents(events);
    console.log(allEvents);
    // }
  }


  const createSchedule = () => {
    let d = date.$M + 1 + "/" + date.$D + "/" + date.$y;
    let s = start.$H + ":" + start.$m;
    let e = end.$H + ":" + end.$m;
    // console.log(start);
    // console.log(s);
    // setSchedule({ ...schedule, Date : d})
    // setSchedule({ ...schedule, startTime : s})
    // setSchedule({ ...schedule, endTime : e})
    schedule.Date = d;
    schedule.startTime = s;
    schedule.endTime = e;

    // console.log(schedule);

    newEvent.title = schedule.title;
    newEvent.start = new Date(date.$y, date.$M, date.$D, start.$H, start.$m, 0, 0);
    newEvent.end = new Date(date.$y, date.$M, date.$D, end.$H, end.$m, 0, 0);
    schedule.start=new Date(date.$y, date.$M, date.$D, start.$H, start.$m, 0, 0);
    schedule.end=new Date(date.$y, date.$M, date.$D, end.$H, end.$m, 0, 0);

    go();
    handleAddEvent();
    // setAllEvents([...allEvents, newEvent]);
    // window.location.reload(false);

  }

  const go = () => {
    axios.post('http://localhost:5000/schedules', schedule).then(res => {

    })
  }
  function handleAddEvent() {

    for (let i = 0; i < allEvents.length; i++) {

      const d1 = new Date(allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      /*
          console.log(d1 <= d2);
          console.log(d2 <= d3);
          console.log(d1 <= d4);
          console.log(d4 <= d3);
            */

      if (
        ((d1 <= d2) && (d2 <= d3)) || ((d1 <= d4) &&
          (d4 <= d3)) || ((d1==d2) && (d3==d4))
      ) {
        // alert("CLASH");
        break;
      }

    }


    setAllEvents([...allEvents, newEvent]);
    // window.location.reload(false);

  }


  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <Drawer variant="permanent" open={true}>


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

                <div className="App">
                  <h1>Calendar</h1>
                  <h2>Add New Event</h2>
                  <div>
                    <input type="text" placeholder="title" style={{ width: "20%", marginRight: "10px" }} value={schedule.title} onChange={(event) => {
                      setSchedule({ ...schedule, title: event.target.value })
                    }} />        {/* <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
        <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} /> */}
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="Date"
                        value={date}
                        onChange={(newValue) => {
                          setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />} />
                      <TimePicker
                        ampmInClock
                        openTo="hours"
                        views={['hours', 'minutes']}
                        inputFormat="HH:mm"
                        mask="__:__"
                        label="from"
                        value={start}
                        onChange={(newValue) => {
                          setStart(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <TimePicker
                        ampmInClock
                        openTo="hours"
                        views={['hours', 'minutes']}
                        inputFormat="HH:mm"
                        mask="__:__"
                        label="to"
                        value={end}
                        onChange={(newValue) => {
                          setEnd(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    {/* <input type="text" placeholder="patientID" style={{ width: "20%", marginRight: "10px" }} value={schedule.patientID} onChange={(event) => {
                        setSchedule({ ...schedule, patientID: event.target.value })
                      }} /> */}

                    <div>
                      <select
                        placeholder="Patient"
                        required
                        value={selectedP}
                        onChange={(e) => {
                          setSelectedP(e.target.value)
                          // setPatient({ ...patient, city: e.target.value })
                          setSchedule({ ...schedule, patientID: e.target.value })

                        }}
                      >
                        <option> --Choose Patient-- </option>
                        {patientsList.map((value, key) => {
                          return (
                            <option value={value._id} key={key}>
                              {value.firstName}
                            </option>
                          );
                        })}
                      </select>

                    </div>

                    <button stlye={{ marginTop: "10px" }} onClick={createSchedule}>
                      Add Event
                    </button>
                  </div>
                  <Calendar localizer={localizer} events={schedulesList} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Schedule1;

