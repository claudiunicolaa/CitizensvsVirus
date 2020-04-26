import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MedicalServices from './MedicalServices';
import Medication from './Medication';
import Demographics from './Demographics';
import Trust from './Trust';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
    width: '60%',
    marginTop: theme.spacing(6),
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  firstAnswer: {
    marginTop: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const steps = ['Medical Services', 'Medication & Equipment', 'Trust', 'Demographics'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <MedicalServices />;
    case 1:
      return <Medication />;
    case 2:
      return <Trust />;
    case 3:
      return <Demographics />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Survey() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [firstAnswer, setFirstAnswer] = React.useState('');
  const [continueAfterAnswer, setContinueAfterAnswer] = React.useState(false);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleFirstAnswerChange = (event) => {
    setFirstAnswer(event.target.value)
  };

  const handleContinueAfterAnswer = () => {
    setContinueAfterAnswer(true)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Citizens VS Virus
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          {!continueAfterAnswer ?
            <>
              <Typography component="h1" variant="h4" align="center">
                But first...
              </Typography>
              <div className={classes.firstAnswer}>
                <Typography component="h5" variant="h5" align="center">
                  How is your health in general?
                </Typography>
                <NativeSelect
                  id="demo-customized-select-native"
                  value={firstAnswer}
                  onChange={handleFirstAnswerChange}
                  input={<BootstrapInput />}
                >
                  <option aria-label="None" value="" />
                  <option value={1}>Very Good</option>
                  <option value={2}>Good</option>
                  <option value={3}>Fair</option>
                  <option value={4}>Bad</option>
                  <option value={5}>Very Bad</option>
                </NativeSelect>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleContinueAfterAnswer}
                  className={classes.button}
                  disabled={!firstAnswer}
                >
                  Continue
                </Button>
              </div>
            </> :
            <>
              <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              <React.Fragment>
                {activeStep === steps.length ? (
                  <React.Fragment>
                    <Typography variant="h5" gutterBottom>
                      Thank you for your order.
                    </Typography>
                    <Typography variant="subtitle1">
                      Your order number is #2001539. We have emailed your order confirmation, and will
                      send you an update when your order has shipped.
                    </Typography>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    {getStepContent(activeStep)}
                    <div className={classes.buttons}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} className={classes.button}>
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
              </React.Fragment>
            </>
          }
        </Paper>
      </main>
    </React.Fragment>
  );
}
