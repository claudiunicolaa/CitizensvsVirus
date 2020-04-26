import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import ReactPlayer from "react-player";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Information() {
  const classes = useStyles();
  const [selectFirstValue, setSelectFirstValue] = React.useState("");

  const handleFirstSelectChange = (event) => {
    setSelectFirstValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom>
            Please specify what would you like to know about specific actions in
            times of
          </Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectFirstValue}
              onChange={handleFirstSelectChange}
            >
              <MenuItem value={1}>
                Basic protective measures against the new coronavirus
              </MenuItem>
              <MenuItem value={2}>
                Why should we maintain social distance?
              </MenuItem>
              <MenuItem value={3}>
                How is coronavirus affecting people who get it?
              </MenuItem>
              <MenuItem value={10}>Other, please specify:....</MenuItem>
            </Select>
            {selectFirstValue === 10 && (
              <TextField
                required
                id="outlined-required"
                defaultValue=""
                variant="outlined"
              />
            )}
            {selectFirstValue === 1 && (
              <ReactPlayer url="https://www.youtube.com/watch?v=bPITHEiFWLc" />
            )}
            {selectFirstValue === 2 && (
              <ReactPlayer url="https://www.youtube.com/watch?v=6Ooz1GZsQ70" />
            )}
            {selectFirstValue === 3 && (
              <ReactPlayer url="https://www.youtube.com/watch?v=qF42gZVm1Bo&" />
            )}
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
