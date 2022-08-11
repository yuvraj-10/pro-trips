import './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './components/Home/Home';
import Form from './components/Form/Form';
import List from './components/List/List';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import React from 'react';

class  App extends React.Component {
  constructor(){
    super();
    this.state={details:[0,0,0,0], //details has 4 values that represent total trips,no.of tropic trip,no.of trek trip,no.of clib trip;
                form_detail:[]     //It initialy empty and it hold the trip details that is date,place,type of trip;
              }
  }
  handle=(val,arr)=>{              //update when new form for trip is filled and we passed as props to the child components
    this.setState({details:val,form_detail:arr})
  }
  render(){
  return (
    <div className="main">
    <Router>
      <Navigation/>
      <Switch>
        <Route exact path="/react-protrips">
          <div className="section">
          <Home details={this.state.details}/>
          </div>
        </Route>
        <Route path="/add">
          <div className="section">
            <Form details={this.state.details} form_detail={this.state.form_detail} handle={this.handle}/>
          </div>
        </Route>
        <Route path='/list'>
          <div className="section">
            <List form_detail={this.state.form_detail}/>
          </div>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}
}

export default App;