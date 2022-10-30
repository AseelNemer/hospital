import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
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
import Button from '@mui/material/Button';
import Homepage from './homepage/homepage.js'
import { Link } from "react-router-dom";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import hospital from '../images/hospital.png'
import ButtonGroup from '@mui/material/ButtonGroup';


const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

function Init(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
      <ListItem key={Homepage} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={Homepage} />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    
    <Box sx={{ display: 'flex' }} >
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link href="#" to='/home'>login</Link>
          {/* <Button component={Link} to="/Login" variant="contained" color="primary">
                     login
                </Button> */}
          {/* <Button key={Homepage} sx={{ color: '#fff' }}>
                {Homepage}
              </Button> */}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box sx={{ p: 3 }}>
      <img
        src={hospital}
        alt="hospital pic"
        className="h-20 my-6 border-2 rounded-full"
        width="700" height="550"
      />
      </Box>
          <Box component="main" sx={{ p: 20 }} justify="space-between">
              <ButtonGroup orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained" 
        size="large" 
        >

                  <Button component={Link} to="/Login" variant="contained" color="primary">
                      Doctor
                  </Button>
                  <Button component={Link} to="/patientLogin" variant="contained" color="primary">
                      Patient
                  </Button>
              </ButtonGroup>
          </Box>
      </Box>

  );
}


export default Init;



// import * as React from 'react';
// import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
// import Box from '@mui/material/Box';
// import { Link } from "react-router-dom";
// import Login from './Login/logIn.js'


// export default function VariantButtonGroup() {
//     return (
//         <Box
//             sx={{
//                 display: 'flex',
//                 flexDirection: 'column',
//                 alignItems: 'center',
//                 '& > *': {
//                     m: 1,
//                 },
//             }}
//         >
        
//             <ButtonGroup variant="outlined" aria-label="outlined button group">
//                 <Button component={Link} to="/Login" variant="contained" color="primary">
//                     Doctor
//                 </Button>
//                 <Button component={Link} to="/patientLogin" variant="contained" color="primary">
//                     Patient
//                 </Button>
//             </ButtonGroup>
//         </Box>
//     );
// }
