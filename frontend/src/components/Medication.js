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

export default function Medication() {
  const classes = useStyles();
  const [firstRadioValue, setFirstRadioValue] = React.useState('');
  const [selectFirstValue, setSelectFirstValue] = React.useState('');
  const [selectSecondValue, setSelectSecondValue] = React.useState('');
  const [selectThirdValue, setSelectThirdValue] = React.useState('');
  const [selectForthValue, setSelectForthValue] = React.useState('');
  const [selectFifthValue, setSelectFifthValue] = React.useState('');

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
  const handleFifthSelectChange = (event) => {
    setSelectFifthValue(event.target.value);
  };
  const handleFirstRadioChange = (event) => {
    setFirstRadioValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <Typography variant="h6" gutterBottom>
              During this period of time, did you require access to any sort of medication/ treatment?
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
                Since January, my and my family’s access to our usual prescribed or over the counter medication has bee:
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
                Since January, my and my family’s access to other prescribed medication has been:
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
              <Typography variant="h6" gutterBottom>
                How would you evaluate your accessibility to medication from a financial perspective:
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectThirdValue}
                  onChange={handleThirdSelectChange}
                >
                  <MenuItem value={1}>It was more expensive</MenuItem>
                  <MenuItem value={2}>Prices were normal</MenuItem>
                  <MenuItem value={3}>Prices were lower</MenuItem>
                  <MenuItem value={4}>I couldn’t afford the medication</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                How would you evaluate your access to sanitizing and protection equipment ever since January:
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectForthValue}
                  onChange={handleForthSelectChange}
                >
                  <MenuItem value={1}>It was very easy for me to procure those</MenuItem>
                  <MenuItem value={2}>It was fairly easy for me to procure those</MenuItem>
                  <MenuItem value={3}>It was fairly difficult for me to procure those</MenuItem>
                  <MenuItem value={4}>It was very difficult for me to procure those</MenuItem>
                  <MenuItem value={5}>I didn’t have access to those</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                How would you evaluate your access, FINANCIALLY, to sanitizing and protection equipment ever since January:
              </Typography>
              <FormControl className={classes.formControl}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectFifthValue}
                  onChange={handleFifthSelectChange}
                >
                  <MenuItem value={1}>Very high costs for me and my family</MenuItem>
                  <MenuItem value={2}>High costs for me and my family</MenuItem>
                  <MenuItem value={3}>Fair costs for me and my family</MenuItem>
                  <MenuItem value={4}>Low costs for me and my family</MenuItem>
                  <MenuItem value={5}>Very low costs for me and my family</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </>
        }
      </Grid>
    </React.Fragment>
  );
}
