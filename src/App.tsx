import * as React from 'react';
import './App.css';
import Helper from './components/Helper';

class App extends React.Component {
  public render() {
    return (
      <React.Fragment>
        <Helper counter={1} />
      </React.Fragment>
    );
  }
}

export default App;
