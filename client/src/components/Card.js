import React from 'react';

class Card extends React.Component {

  constructor(props){
    super(props);
    console.log("CARD PROPS", props);
  }

  render(){
    return(

      <div 
        className="col-xs-6 col-md-4 col-lg-4 card"
        style={{ padding: '10px', marginBottom: '20px', maxHeight: '300px', height: '300px' }}>

        <div className="panel panel-default" style={{ maxHeight: '300px', height: '300px' }}>

          <div className="panel-body">
            
            <h2>{this.props.proyect.title} Project</h2>

            <p>{ this.props.proyect.description }</p>
            <p>{ this.props.proyect.current } / { this.props.proyect.goal } Pledge Goal </p>
            
            <p>
              <a className="btn btn-default" href="#" role="button">
                { this.props.proyect.id } 
              </a>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default Card;