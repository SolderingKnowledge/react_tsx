import * as React from 'react';
import './App.css';
import Helper from './components/Helper';

interface IState{
  starting: number;
}

class App extends React.Component <{}, IState>{
  public state={
    starting:0
  }
  public increment = () => {
    this.setState(prevState => {
      return {starting: prevState.starting+1};
    });
  } 

  public decrement = () => {
    this.setState(prevState => {
      if(prevState.starting>0){
        return {starting: prevState.starting-1};
      }
      else{
        return {starting:prevState.starting}
      }
    });
  }

  public render() {
    return (
      <React.Fragment>
        <Helper counter={this.state.starting} />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </React.Fragment>
    );
  }
}

export default App;
