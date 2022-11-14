import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer,momentLocalizer } from "react-big-calendar";
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
import axios from 'axios';
import { getToolbarUtilityClass } from "@mui/material";

const localizer = momentLocalizer(moment);



const events = [
  {
      title: "Big Meeting",
      start: new Date(2022, 11,0,12,0,0,0),
      end: new Date(2022,11, 0,13,0,0,0),
  },
  {
      title: "Vacation",
      start: new Date(2021, 6, 7),
      end: new Date(2021, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2021, 6, 20),
      end: new Date(2021, 6, 23),
  },
];

function Schedule1() {
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
  const [title, settitle] = React.useState(null);
  const [start, setStart] = React.useState(null);
  const [end, setEnd] = React.useState(null);
  const [date,setDate]=useState(null);
  const location = useLocation();
  let iddoctor = location.state, idDoctor
  

// console.log(date.$y);
// console.log(start.$H);
// console.log(end.$H);

  const [schedule, setSchedule] = useState({

    Date: '',
    startTime: '',
    endTime: '',
    title: 'new title',
    doctorID:iddoctor.idDoctor,
    patientID: '1',
    

})
// const [patientsList, setPatientList] = useState([]);

// useEffect(() => {
//   axios.get(`http://localhost:5000/doctors/${id}`).then((par) => {
//       setPatientList(par.data.a);
//   }, [])
// })


const createSchedule = () => {
  let d=date.$M+1+"/"+date.$D+"/"+date.$y;
  let s=start.$H + ":"+ start.$m;
  let e=end.$H + ":"+ end.$m;
console.log(start);
  console.log(s);
  // setSchedule({ ...schedule, Date : d})
  // setSchedule({ ...schedule, startTime : s})
  // setSchedule({ ...schedule, endTime : e})
  schedule.Date=d;
  schedule.startTime=s;
  schedule.endTime=e;

  console.log(schedule);

 newEvent.title=schedule.title;
 newEvent.start=new Date(date.$y,date.$M,date.$D,start.$H,start.$m,0,0);
 newEvent.end=new Date(date.$y,date.$M,date.$D,end.$H,end.$m,0,0); 
 
go();
handleAddEvent();
  
}

const go=() =>{
  axios.post('http://localhost:5000/schedules', schedule).then(res => {
      
  })
}
  function handleAddEvent() {

      for (let i=0; i<allEvents.length; i++){

          const d1 = new Date (allEvents[i].start);
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
            ( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) &&
              (d4 <= d3) )
            )
          {   
              alert("CLASH"); 
              break;
           }

      }


      setAllEvents([...allEvents, newEvent]);
  }

  return (
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
        <input type="text" placeholder="patientID" style={{ width: "20%", marginRight: "10px" }} value={schedule.patientID} onChange={(event) => {
                    setSchedule({ ...schedule, patientID: event.target.value })
                }} />

        <button stlye={{ marginTop: "10px" }} onClick={createSchedule}>
          Add Event
        </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }}  />
    </div>
  );
}

export default Schedule1;

// import React, { Component } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
// import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import { Schedule } from "@material-ui/icons";
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { Link, NavLink } from 'react-router-dom';
// import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import MuiDrawer from '@mui/material/Drawer';
// import Box from '@mui/material/Box';
// import MuiAppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import { Button } from "@material-ui/core";
// import DatePicker from "react-datepicker";
// import './sch.css'
// import "react-datepicker/dist/react-datepicker.css";



// const localizer = momentLocalizer(moment);
// const DnDCalendar = withDragAndDrop(Calendar);


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

// const add = () => {

// };
// const events = [
//     {
//         title: "Big Meeting",
//         allDay: true,
//         start: new Date(2022, 11,0,12,0,0,0),
//         end: new Date(2022,11, 0,13,0,0,0),
//     },
//     {
//         title: "Vacation",
//         start: new Date(2021, 6, 7),
//         end: new Date(2021, 6, 10),
//     },
//     {
//         title: "Conference",
//         start: new Date(2021, 6, 20),
//         end: new Date(2021, 6, 23),
//     },
//   ];
// class Popup extends Component {
//   render() {
//     return (
//       <div className='popup'>
//         <div className='popup_inner'>
//           <h1>{this.props.text}</h1>
//           <button onClick={this.props.closePopup}>close me</button>
//           <button onClick={this.props.closePopup}>close me</button>
//           <button onClick={this.props.closePopup}>close me</button>
//           <button onClick={this.props.closePopup}>close me</button>
//           <button onClick={this.props.closePopup}>close me</button>
//           <h1>add me</h1>
//         </div>
//       </div>
//     );
//   }
// }

// export default function Schedule1() {
//   const [newEvent, setNewEvent] = useState({
//      title: "", start: "", end: "" });
//   const [allEvents, setAllEvents] = useState(events);
    
//   function handleAddEvent() {
//   }


//   const togglePopup=()=> {
//     this.setState({
//       showPopup: !this.state.showPopup
//     });
//   }


//   const onEventResize = (data) => {
//     const { start, end } = data;

//     this.setState((state) => {
//       state.events[0].start = start;
//       state.events[0].end = end;
//       return { events: [...state.events] };
//     });
//   };

//   const onEventDrop = (data) => {
//     console.log(data);
//   };

//   return (
//     <div className='app'>
//       <ThemeProvider theme={mdTheme}>
//         <Box sx={{ display: 'flex' }}>
//           <CssBaseline />
//           <Drawer variant="permanent" open={true}>
//           </Drawer>
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 0, mb: 4 }}>
//             <Grid container spacing={3}>
//               <Grid item xs={12} md={12} lg={12}>
//                 <div className="App">
//                   <DnDCalendar
//                     defaultDate={moment().toDate()}
//                     defaultView="month"
//                     events={events}
//                     localizer={localizer}
//                     onEventDrop={onEventDrop}
//                     onEventResize={onEventResize}
//                     resizable
//                     style={{ height: "100vh" }}
//                   />
                  
//                 </div>
//                 <div>
//             <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
//             <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
//             <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
//             <button stlye={{ marginTop: "10px" }} onClick={handleAddEvent}>
//               Add Event
//             </button>
//           </div>
//               </Grid>
//             </Grid>
//           </Container>
//         </Box>
//       </ThemeProvider>
//     </div>
//   );
// }


