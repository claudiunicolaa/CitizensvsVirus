import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '50%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function MedicalServices() {
  const classes = useStyles();
  const [firstRadioValue, setFirstRadioValue] = React.useState('');
  const [secondRadioValue, setSecondRadioValue] = React.useState('');
  const [selectFirstValue, setSelectFirstValue] = React.useState('');
  const [selectSecondValue, setSelectSecondValue] = React.useState('');
  const [selectThirdValue, setSelectThirdValue] = React.useState('');
  const [selectForthValue, setSelectForthValue] = React.useState('');

  const handleFirstSelectChange = (event) => {
    setSelectFirstValue(event.target.value);
  };
  const handleSecondSelectChange = (event) => {
    setSelectSecondValue(event.target.value);
  };
  const handleThirdSelectChange = (event) => {
    setSelectThirdValue(event.target.value);
  };
  const handleForthSelectChange = (event) => {
    setSelectForthValue(event.target.value);
  };

  const handleFirstRadioChange = (event) => {
    setFirstRadioValue(event.target.value);
  };

  const handleSecondRadioChange = (event) => {
    setSecondRadioValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="h6" gutterBottom>
              Since January, did you or your immediate family (spouse/partner, children, parents) required access to medical care?
            </Typography>
            <RadioGroup aria-label="question" name="question1" value={firstRadioValue} onChange={handleFirstRadioChange}>
              <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
              <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
            </RadioGroup>
          </FormControl>
        </Grid>
        {
          firstRadioValue === 'yes' &&
          <>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Since January, my and my immediate family’s access to our GP (Family Physician/Family Doctor) has been:
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectFirstValue}
                  onChange={handleFirstSelectChange}
                >
                  <MenuItem value={1}>Very Good</MenuItem>
                  <MenuItem value={2}>Good</MenuItem>
                  <MenuItem value={3}>Fair</MenuItem>
                  <MenuItem value={4}>Bad</MenuItem>
                  <MenuItem value={5}>Very Bad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Since January, my and my immediate family’s access to specialised medical care has been:
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectSecondValue}
                  onChange={handleSecondSelectChange}
                >
                  <MenuItem value={1}>Very Good</MenuItem>
                  <MenuItem value={2}>Good</MenuItem>
                  <MenuItem value={3}>Fair</MenuItem>
                  <MenuItem value={4}>Bad</MenuItem>
                  <MenuItem value={5}>Very Bad</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <Typography variant="h6" gutterBottom>
                  Since January, me and my immediate family required emergency medical care:
                </Typography>
                <RadioGroup aria-label="question" name="question2" value={secondRadioValue} onChange={handleSecondRadioChange}>
                  <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
                  <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
                </RadioGroup>
              </FormControl>
            </Grid>
            {secondRadioValue === 'yes' &&
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    Since January, my and my immediate family’s access to urgency care has been:
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectThirdValue}
                      onChange={handleThirdSelectChange}
                    >
                      <MenuItem value={1}>Very Good</MenuItem>
                      <MenuItem value={2}>Good</MenuItem>
                      <MenuItem value={3}>Fair</MenuItem>
                      <MenuItem value={4}>Bad</MenuItem>
                      <MenuItem value={5}>Very Bad</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    From a financial perspective, how would you rate your access to medical care:
                  </Typography>
                  <FormControl className={classes.formControl}>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={selectForthValue}
                      onChange={handleForthSelectChange}
                    >
                      <MenuItem value={1}>I had no access to medical care due to the cost of it</MenuItem>
                      <MenuItem value={2}>I had limited access to medical care due to the cost of it</MenuItem>
                      <MenuItem value={3}>I had access to medical care at a very high cost for me and my family</MenuItem>
                      <MenuItem value={4}>I had access to medical care at a fair cost for me and my family</MenuItem>
                      <MenuItem value={5}>I had access to medical care at a low cost for me and my family</MenuItem>
                      <MenuItem value={5}>I had access to medical care at not cost for me and my family</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </>
            }
          </>
        }
      </Grid>
    </React.Fragment>
  );
}
