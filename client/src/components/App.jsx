import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import Index from './Index.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <BrowserRouter>
        <div>
          <Index />
          <Switch>
            <Route name='project' route='/project'  />
            <Route name='user' route='/user' />
            <Route name='organization' route='/organization' />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }

}

export default App;
