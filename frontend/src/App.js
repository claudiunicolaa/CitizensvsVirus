import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Introduction from './components/Introduction';
import Survey from './components/Survey';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/survey" component={Survey}/>
          <Route exact path="/" component={Introduction}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
