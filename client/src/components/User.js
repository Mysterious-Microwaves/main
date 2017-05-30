import React from 'react';
import Navbar from './Navbar.js';
import Card from './Card.js';

class User extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      test: [

        { title: 'First',
          description: 'This is the first description',
          goal: 9001,
          current: 100,
          id: 'ID Link' 
        },

        { title: 'Second',
          description: 'This is the second description',
          goal: 9001,
          current: 100,
          id: 'ID Link' 
        },

        { title: 'Third',
          description: 'This is the Third description',
          goal: 9001,
          current: 100,
          id: 'ID Link' 
        },

        { title: 'Fourth',
          description: 'This is the Fourth description',
          goal: 9001,
          current: 100,
          id: 'ID Link' 
        },

        { title: 'Fifth',
          description: 'This is the Fifth description',
          goal: 9001,
          current: 100,
          id: 'id link' 
        },

        { title: 'Sixth',
          description: 'This is the Sixth description',
          goal: 9001,
          current: 100,
          id: 'id link' 
        }
      ]
    };

  }

  render(){

    // console.log("STATE",this.state)
    return(

      <div id="userpageContainer">

        <div className="container">

            <div className="col-xs-12 col-sm-12">

              <div className="jumbotron"
                    style={{ backgroundColor: 'white' }}>

                  <h1>User Profile Page</h1>

                  <p>This is some sample text to respresent a short and and sweet, very nice user bio parragraph text with sugar fluff all over and bla bla bla.
                  </p>

              </div> 

              {/*<div class="jumbotron">
                <div class="container">
                  <h1>Hello, world!</h1>
                  <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
                  <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                </div>
              </div>*/}


              <div className="row col-xs-12 col-sm-12  cardList">
                { this.state.test.map( (p,k) => <Card key={k} proyect={ p } />  )}
              </div>

            </div>

        </div>

      </div>
    );
  }

}

export default User;


/*

  offset sidepanel menu

      <div className="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div className="list-group">
          <a href="#" className="list-group-item active">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
          <a href="#" className="list-group-item">Link</a>
        </div>
      </div>
            


        <h1>User Profile</h1>
        <h3>Menu Bar Component</h3>
        <h3>Username, Picture and Orgs Component</h3>
        <h3>Donated to ( List Component )</h3>
        <h3>You might also like ( List Component )</h3>
        <p>Create New Team Button / component?</p>
        <a href="/">BACK HOME</a>


*/