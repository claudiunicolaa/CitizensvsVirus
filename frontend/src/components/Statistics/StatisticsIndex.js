import React from 'react';
import { Chart } from "react-google-charts";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CollapsableCard from "./CollapsableCard";

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
    },
    panel: {
        margin: "20px",
        borderRadius: "10px",
        padding: '10px',
        backgroundColor: "#f5f8fc",
        boxShadow: "5px 10px #BBB",
        width: "500px",
        height: "300px"
    }
  }));

export default function StatisticsIndex() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <AppBar position="relative">
            <Toolbar>
            <img className={classes.logo} alt="Logo of the European Commission"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/European_Commission.svg/1280px-European_Commission.svg.png" />
            <Typography variant="h6" color="inherit" noWrap>
                EU Citizens vs Virus
            </Typography>
            </Toolbar>
        </AppBar>

        <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
            
            <CollapsableCard
              chartTitle="People health data"
              renderChart={()=>{
                return(
                <Chart
                    width={'500px'}
                    height={'300px'}
                    chartType="PieChart"
                    loader={<div>Loading health chart</div>}
                    data={[
                        ['Health', 'How many people'],
                        ['Very good health', 11],
                        ['Good health', 7],
                        ['Fair health', 5],
                        ['Bad health', 2],
                        ['Very bad health', 1],
                    ]}
                    options={{
                      title: '',
                      backgroundColor: '#f5f8fc',
                    }}
                    rootProps={{ 'data-testid': '1' }}
                />
                )
              }}
            />
            
        
        <CollapsableCard
          chartTitle="COVID-19 main source of information"
          chartDesc="Where did people found data about COVID-19"
          renderChart={()=>{
            return(
            <Chart
            width={'500px'}
            height={'300px'}
            chartType="ColumnChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Source', 'Official websites', 'Television networks', 'Other people','Social Media','Newspappers'],
                ['2020', 34, 11, 3,4,5]
            ]}
            options={{
              backgroundColor: '#f5f8fc',
            }}
            // For tests
            rootProps={{ 'data-testid': '2' }}
            />
            )
          }}
        />
        
        
        
        <CollapsableCard
          chartTitle="What are people buying based on their health"
          renderChart={()=>{
            return(<Chart
            width={'500px'}
            height={'300px'}
            chartType="BarChart"
            loader={<div>Loading Chart</div>}
            data={[
                ['Health status', 'Stack on food reserves', 'Stack on medication'],
                ['Very good', 3, 4],
                ['Good', 10, 1],
                ['Fair', 12, 3],
                ['Bad', 5, 3],
                ['Very Bad', 1, 2],
            ]}
            options={{
                chartArea: { width: '50%' },
                isStacked: true,
                hAxis: {
                title: '',
                minValue: 0,
                },
                vAxis: {
                title: '',
                },
                backgroundColor: '#f5f8fc',
            }}
            rootProps={{ 'data-testid': '3' }}
            />)
          }}
        />

        <CollapsableCard 
          chartTitle={'Correlation between average age of the people, health condition' +
                    'and population of some world countries'}
          chartDesc=""
          renderChart={()=>{
            return(
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="BubbleChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['ID', 'Average age', 'Health condition', 'Country', 'Population'],
                  ['RO', 30.66, 1.3, 'Romania', 19000000],
                  ['HU', 34.84, 3, 'Hungary', 9700000],
                  ['DE', 15, 1.5, 'Germany', 83000000]
                ]}
                options={{
                  hAxis: { title: 'Health condition based on region' },
                  vAxis: { title: 'Health condition (1-Very Good, 5- Very Bad)' },
                  backgroundColor: '#f5f8fc',
                  bubble: { textStyle: { fontSize: 11 } },
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            )
          }}
        />
        
        <CollapsableCard 
          chartTitle="Age vs. accessibility to basic resources"
          renderChart = {()=>{
            return(
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="ScatterChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Age', 'Access to basic resources (1-Very Good, 5-Very Bad)'],
                  [20, 1.3],
                  [40, 1.6],
                  [50, 1.8],
                  [60, 2],
                  [70, 3],
                ]}
                options={{
                  hAxis: { title: 'Average age', minValue: 0, maxValue: 70 },
                  vAxis: { title: 'Access to basic resources', minValue: 0, maxValue: 5 },
                  legend: 'none',
                  backgroundColor: '#f5f8fc',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            )
          }}
        />

        <CollapsableCard
          chartTitle="Access to basic resources during COVID-19 pandemic"
          renderChart={()=>{
            return(
              <Chart
            width={'600px'}
            height={'400px'}
            chartType="LineChart"
            loader={<div>Loading Chart</div>}
            data={[
              ['x', 'People from rural area'],
              [0, 0],
              [10, 1],
              [20, 1.2],
              [30, 1.3],
              [40, 1.5],
              [50, 1.2],
              [60, 1.6],
              [70, 1.4]
            ],
            [
              ['x', 'People from urban area'],
              [0, 0],
              [10, 1.1],
              [20, 1.1],
              [30, 1.25],
              [40, 1.4],
              [50, 1.3],
              [60, 1.1],
              [70, 1.9]
            ]}
            options={{
              hAxis: {
                title: 'Age',
              },
              vAxis: {
                title: '',
              },
              backgroundColor: '#f5f8fc',
            }}
            rootProps={{ 'data-testid': '1' }}
          />
            )
          }}
        />

        {/* <CollapsableCard
          chartTitle="How prepared are the people for this pandemic based on their age"
          renderChart={()=>{
            return(
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="LineChart"
                loader={<div>Loading Chart</div>}
                data={[
                  [
                    { type: 'number', label: 'x' },
                    { type: 'number', label: 'values' },
                    { id: 'i0', type: 'number', role: 'interval' },
                    { id: 'i1', type: 'number', role: 'interval' },
                  ],
                  [18, 1, 2],
                  [24, 1, 2],
                  [30, 2, 3],
                  [36, 2.1, 2.15],
                  [41, 2, 3],
                  [46, 1.5, 2],
                  [51, 2.55,3.11],
                  [56, 1.9,2.1],
                  [61, 3.3,4],
                  [66, 4,5],
                  [70, 3.5,4.4],
                ]}
                options={{
                  title: '',
                  curveType: 'function',
                  lineWidth: 4,
                  intervals: { style: 'line' },
                  legend: 'none',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
            )
          }}
        /> */}

        </Grid>
        

      </React.Fragment>
    );
  }
  