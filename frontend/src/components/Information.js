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
              <MenuItem value={4}>
                How should I greet another person to avoid the risk of
                infection?
              </MenuItem>
              <MenuItem value={5}>
                How should I act if someone in my household is a COVID-19
                patient?
              </MenuItem>
              <MenuItem value={6}>
                How should I get ready for the period after quarantine?
              </MenuItem>
              <MenuItem value={7}>How can I help during the pandemic?</MenuItem>
              <MenuItem value={8}>
                How can I get help during the pandemic?
              </MenuItem>
              <MenuItem value={9}>What is myth and what is fact?</MenuItem>
              <MenuItem value={10}>Other, please specify:....</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
