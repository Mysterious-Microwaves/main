import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Landing from './components/Landing.js';
import User from './components/User.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

// for Browser History
import createHistory from 'history/createBrowserHistory';
const history = createHistory();
// Get the current location.
const location = history.location;
// Listen for changes to the current location.
const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});
// Use push, replace, and go to navigate around.
// history.push('/home', { some: 'state' })
// To stop listening, call the function returned from listen().
// unlisten()

/*
  For Universal Isomorphic Routing:
  https://ponyfoo.com/articles/universal-routing-react-es6
*/

ReactDOM.render(

  <Router history={ history }>
    <div>
      <Navbar/>

      <Route exact path="/" component={Landing} />
      <Route path="/user" component={User} />

      <Footer/>
    </div>
  </Router>, 

  document.getElementById('root'));

