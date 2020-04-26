import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Link, Route, Switch
} from 'react-router-dom';
import Survey from './Survey';
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(8, 16, 6),
    margin: 'auto'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  logo: {
    width: '120px',
    marginRight: '20px',
  }
}));

export default function Introduction() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <img className={classes.logo} alt="Logo of the European Commission"
               src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/European_Commission.svg/1280px-European_Commission.svg.png" />
          <Typography variant="h6" color="inherit" noWrap>
            EU Citizens vs Virus
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h4" variant="h4" align="center" color="textPrimary" gutterBottom>
              #EUvsVirus2020 #ResilientEUCitizens #StayAtHome
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The COVID-19 pandemic makes us ask many questions and one of them is: how resilient are European Union and each member state during the pandemic crisis?
              Our aim is to understand the citizens' perception regarding the resilience of the health systems in the current context based on 4 indicators (Access To Medical Services, Access To Medication & Equipment, Trust levels, Demographics).
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Router>
                    <Link to="/survey">
                      <Button variant="contained" color="primary">
                        Take the survey
                      </Button>
                    </Link>
                  </Router>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    See statistics
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </React.Fragment>
  );
}
