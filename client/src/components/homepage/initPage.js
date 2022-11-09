import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import Homepage from './homepage.js'
import { Link } from "react-router-dom";
import hospital from '../../images/hospital.png'
import ButtonGroup from '@mui/material/ButtonGroup';
import './init.css'
import background from '../../images/background.jpg'


function Init(props) {

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<div className='initbody' style={{  backgroundImage: `url(${background})`,backgroundRepeat:"no-repeat",backgroundSize:"contain"
, height:1000,width:900 }} >
    
      <Box    sx={{ p: 15 }}  noValidate width='950px' >
        <div className='buttons'>

          <Link to="/Login">
            <button className='btns' >
              Doctor
            </button>
          </Link>
          <Link to="/patientLogin">
            <button className='btns'  >
            Patient
            </button>
          </Link>
        </div>
      </Box>
</div>
  );
}


export default Init;


