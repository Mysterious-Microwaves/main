import React from 'react';
import Navbar from './Navbar.js';

class Landing extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div id="landingContainer">
        <a href="/user">User Profile</a>
        <br/>
        <a href="/organization">Organization Profile</a>
      </div>
    );
  }

}

export default Landing;


