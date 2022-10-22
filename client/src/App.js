import { Container, AppBar, Typography, Grow , Grid  } from '@material-ui/core'
import Create from './components/CreateDoctor.js'
import useStyles from './styles';
function App() {
  const classes=useStyles();

  
  return (
    <div className="App">
        <Container maxWidth='ig'>
          <AppBar className={classes.appBar} position ="static" color ="inherit">
            <Typography className={classes.heading} variant="h2" align="center"> Student Create & Show</Typography>
          </AppBar>


          <Grow in>
            <Container>
              <Grid container justify="space-between" alignItems="strech">
                <Grid item xs={12} sm={4}>
                  <AppBar className={classes.appBar} position="static" color="inherit">
                    <Create/>
                  </AppBar>
                </Grid>
              </Grid>
            </Container>
          </Grow>
        </Container>
    </div>
  );
}

export default App;
