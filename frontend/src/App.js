import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Introduction from './components/Introduction';
import Survey from './components/Survey';
import StatisticsIndex from "./components/Statistics/StatisticsIndex";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/survey" component={Survey}/>
          <Route exact path="/" component={Introduction}/>
          <Route path="/statistics" component={StatisticsIndex}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
