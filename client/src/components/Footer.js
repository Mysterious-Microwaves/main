import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      <hr/>
        <footer>
          <p>&copy; 2017 Mysterious Microwaves</p>
        </footer>
      </div>
    );
  }

}

export default Footer;