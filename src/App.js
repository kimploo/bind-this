import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  handleClick = () => {
    console.log(this);
  }

  render(){
    return(
      <div className="App">
      <header className="App-header">
        practice this binding
      </header>
      <button type="button" onClick={this.handleClick}>
        Click Me
      </button>
    </div>
    )
  }

}
