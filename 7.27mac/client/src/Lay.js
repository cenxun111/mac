import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Leftside from './components/mainlay/Leftside'
import Center from './components/mainlay/Center'
import Rightbar from './components/mainlay/Rightbar'
import Hidden from "@material-ui/core/Hidden";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));


export default function FullWidthGrid() {
  const classes = useStyles();

  return (

    <div className={classes.root}>

      <Grid container >
        <Grid item xs={3} md={3} >
         <Leftside/>
        </Grid>

        <Grid item lg={6} xs={10}>
          <Center />
          
         
        {/* <Router>
        <Switch>
          <Route exact path="/">
            <Center />
          </Route>
          <Route path ="/register">
            <Register/>
          </Route>
        </Switch>
      </Router> */}
          
        {/* <Write/> */}
        {/* <Setting /> */}
        {/* <Login/> */}
        {/* <Register/> */}
        </Grid>

        <Hidden mdDown>

          <Grid item xs={3} >
            <Rightbar />
          </Grid>

        </Hidden>

      </Grid>

    </div>

  );
}

