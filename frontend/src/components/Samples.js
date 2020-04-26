import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
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
  const [radioValue, setRadioValue] = React.useState('female');
  const [selectValue, setSelectValue] = React.useState('');

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="Text Input"
            fullWidth
            autoComplete="fname"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Radio Question</FormLabel>
            <RadioGroup aria-label="gender" name="gender1" value={radioValue} onChange={handleRadioChange}>
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Select Question
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectValue}
              onChange={handleSelectChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Multiple Choices Question
          </Typography>
          <FormControlLabel
            control={<Checkbox color="secondary" name="choice1" value="choice1" />}
            label="Choice 1"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="choice1" value="choice1" />}
            label="Choice 2"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="choice1" value="choice1" />}
            label="Choice 3"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="choice1" value="choice1" />}
            label="Choice 4"
          />
        </Grid>
        <Grid item xs={12}>

        </Grid>
        <Grid item xs={12}>

        </Grid>
        <Grid item xs={12}>

        </Grid>
      </Grid>
    </React.Fragment>
  );
}
