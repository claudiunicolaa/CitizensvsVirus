import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Demographics() {
  const classes = useStyles();
  const [selectFirstValue, setSelectFirstValue] = React.useState("");
  const [selectSecondValue, setSelectSecondValue] = React.useState("");
  const [selectThirdValue, setSelectThirdValue] = React.useState("");
  const [selectForthValue, setSelectForthValue] = React.useState("");
  const [selectFifthValue, setSelectFifthValue] = React.useState("");
  const [selectSixthValue, setSelectSixthValue] = React.useState("");
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
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            What is your Gender?
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectFirstValue}
              onChange={handleFirstSelectChange}
            >
              <MenuItem value={1}>Male</MenuItem>
              <MenuItem value={2}>Female</MenuItem>
              <MenuItem value={3}>Other</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          What is your age bracket?
        </Typography>
        <FormControl className={classes.formControl}>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={selectSecondValue}
            onChange={handleSecondSelectChange}
          >
            <MenuItem value={1}>18-23</MenuItem>
            <MenuItem value={2}>24-29</MenuItem>
            <MenuItem value={3}>30-35</MenuItem>
            <MenuItem value={4}>36-40</MenuItem>
            <MenuItem value={5}>41-45</MenuItem>
            <MenuItem value={6}>46-50</MenuItem>
            <MenuItem value={7}>51-55</MenuItem>
            <MenuItem value={8}>56-60</MenuItem>
            <MenuItem value={9}>61-65</MenuItem>
            <MenuItem value={10}>66-70</MenuItem>
            <MenuItem value={11}>&gt;70</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            What is your employment status?
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectThirdValue}
              onChange={handleThirdSelectChange}
            >
              <MenuItem value={1}>Retired</MenuItem>
              <MenuItem value={2}>Actively Working</MenuItem>
              <MenuItem value={3}>Not in the workforce (unemployed)</MenuItem>
              <MenuItem value={4}>Partly retired</MenuItem>
              <MenuItem value={5}>Under technical unemployment</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Do you live in an urban or rural area?
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectForthValue}
              onChange={handleForthSelectChange}
            >
              <MenuItem value={1}>Urban</MenuItem>
              <MenuItem value={2}>Rural</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            What is your latest completed educational level?
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectFifthValue}
              onChange={handleFifthSelectChange}
            >
              <MenuItem value={1}>High-school</MenuItem>
              <MenuItem value={2}>Professional school</MenuItem>
              <MenuItem value={4}>Higher education (Bachelor Degree)</MenuItem>
              <MenuItem value={5}>
                Graduate education (Master's Degree)
              </MenuItem>
              <MenuItem value={6}>Doctoral Degree</MenuItem>
              <MenuItem value={7}>Post-doctoral studies</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Your country of residence is:
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectSixthValue}
              onChange={handleSixthSelectChange}
            >
              <MenuItem value={'Austria'}>Austria</MenuItem>
              <MenuItem value={'Belgium'}>Belgium</MenuItem>
              <MenuItem value={'Bulgaria'}>Bulgaria</MenuItem>
              <MenuItem value={'Croatia'}>Croatia</MenuItem>
              <MenuItem value={'Cyprus'}>Cyprus</MenuItem>
              <MenuItem value={'Czechia'}>Czechia</MenuItem>
              <MenuItem value={'Denmark'}>Denmark</MenuItem>
              <MenuItem value={'Estonia'}>Estonia</MenuItem>
              <MenuItem value={'Finland'}>Finland</MenuItem>
              <MenuItem value={'France'}>France</MenuItem>
              <MenuItem value={'Germany'}>Germany</MenuItem>
              <MenuItem value={'Greece'}>Hungary</MenuItem>
              <MenuItem value={'Ireland'}>Ireland</MenuItem>
              <MenuItem value={'Italy'}>Italy</MenuItem>
              <MenuItem value={'Latvia'}>Latvia</MenuItem>
              <MenuItem value={'Lithuania'}>Lithuania</MenuItem>
              <MenuItem value={'Luxembourg'}>Luxembourg</MenuItem>
              <MenuItem value={'Malta'}>Malta</MenuItem>
              <MenuItem value={'Netherlands'}>Netherlands</MenuItem>
              <MenuItem value={'Poland'}>Poland</MenuItem>
              <MenuItem value={'Portugal'}>Portugal</MenuItem>
              <MenuItem value={'Romania'}>Romania</MenuItem>
              <MenuItem value={'Slovakia'}>Slovakia</MenuItem>
              <MenuItem value={'Slovenia'}>Slovenia</MenuItem>
              <MenuItem value={'Spain'}>Spain</MenuItem>
              <MenuItem value={'Sweden'}>Sweden</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
