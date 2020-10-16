import React from "react";
import PropTypes from "prop-types";

class App extends React.Component{
  state = {
    count:0
  }

  constructor(props){
    super(props);
    console.log("constructor");
  }

  onHandleAdd = () => {
    // this.state.count += 1;
    // this.setState({count: this.state.count+1})
    this.setState(current => ({count:current.count+1}));
  }
  
  onHandleMin = () => {
    this.setState({count: this.state.count-1})
  }

  componentDidMount = () => {
    console.log("componentDidMount");
  }

  componentDidUpdate = () => {
    console.log("update");
  }
  
  render(){
    console.log("render");
  return (
    <div>
      <h1> number : {this.state.count}</h1>
      <button onClick={this.onHandleAdd}>Add</button>      
      <button onClick={this.onHandleMin}>Min</button>      
    </div>
  )
  }
}

export default App;
