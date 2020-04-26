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

export default function Trust() {
  const classes = useStyles();
  const [firstRadioValue, setFirstRadioValue] = React.useState('');
  const [secondRadioValue, setSecondRadioValue] = React.useState('');
  const [selectFirstValue, setSelectFirstValue] = React.useState('');
  const [selectSecondValue, setSelectSecondValue] = React.useState('');
  const [selectThirdValue, setSelectThirdValue] = React.useState('');
  const [selectForthValue, setSelectForthValue] = React.useState('');
  const [selectFifthValue, setSelectFifthValue] = React.useState('');
  const [selectSixthValue, setSelectSixthValue] = React.useState('');

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
  const handleSixthSelectChange = (event) => {
    setSelectSixthValue(event.target.value);
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
          <Typography variant="h6" gutterBottom>
            In general, I would describe myself as trustful.
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectFirstValue}
              onChange={handleFirstSelectChange}
            >
              <MenuItem value={1}>Strongly agree</MenuItem>
              <MenuItem value={2}>Agree</MenuItem>
              <MenuItem value={3}>Neutral</MenuItem>
              <MenuItem value={4}>Disagree</MenuItem>
              <MenuItem value={5}>Strongly Disagree</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          How often have you been using the checked sources to review the status of the crisis and actions taken?
        </Typography>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectSecondValue}
            onChange={handleSecondSelectChange}
          >
            <MenuItem value={1}>I haven’t followed the development</MenuItem>
            <MenuItem value={2}>A couple of times a month</MenuItem>
            <MenuItem value={3}>A couple of times a week</MenuItem>
            <MenuItem value={4}>On a daily basis</MenuItem>
            <MenuItem value={5}>Several times a day</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          How would you rate your access to basic resources (food, water, shelter, clothing) during the COVID-19 pandemic?
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
        <FormControl component="fieldset">
          <Typography variant="h6" gutterBottom>
            Have you and your immediate family stack on food reserves at the beginning of the COVID-19 crisis?
          </Typography>
          <RadioGroup aria-label="question" name="question1" value={firstRadioValue} onChange={handleFirstRadioChange}>
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl component="fieldset">
          <Typography variant="h6" gutterBottom>
            Have you and your immediate family stack on medication at the beginning of the COVID-19 crisis?
          </Typography>
          <RadioGroup aria-label="question" name="question2" value={secondRadioValue} onChange={handleSecondRadioChange}>
            <FormControlLabel value="yes" control={<Radio color="primary" />} label="Yes" />
            <FormControlLabel value="no" control={<Radio color="primary" />} label="No" />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          How much time have you spent helping the community during this crisis by volunteering (with or without a contract)? (shopping for vulnerable people, volunteering in an organisation)
        </Typography>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectForthValue}
            onChange={handleForthSelectChange}
          >
            <MenuItem value={1}>None</MenuItem>
            <MenuItem value={2}>1-5 hours a week</MenuItem>
            <MenuItem value={3}>6-10 hours a week</MenuItem>
            <MenuItem value={4}>11-20 hours a week</MenuItem>
            <MenuItem value={5}>20+ hours a week</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          How critical do you perceive to be the novel COVID-10 crisis?
        </Typography>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectFifthValue}
            onChange={handleFifthSelectChange}
          >
            <MenuItem value={1}>The world as we know it will change</MenuItem>
            <MenuItem value={2}>There will be long-lasting effect of the crisis</MenuItem>
            <MenuItem value={3}>There will be some medium-term effect of the crisis</MenuItem>
            <MenuItem value={4}>I believe we will go back to how things were by the end of next year</MenuItem>
            <MenuItem value={5}>I believe we will go back to how things were by the end of this year</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          How prepared do you consider yourself to have been to face the pandemic?
        </Typography>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectSixthValue}
            onChange={handleSixthSelectChange}
          >
            <MenuItem value={1}>Very well prepared</MenuItem>
            <MenuItem value={2}>Well prepared</MenuItem>
            <MenuItem value={3}>I don’t know</MenuItem>
            <MenuItem value={4}>Not prepared</MenuItem>
            <MenuItem value={5}>Very badly prepared</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}
