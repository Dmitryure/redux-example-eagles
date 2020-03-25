import React from 'react';
import {connect} from 'react-redux'
import Form from './components/Form'
import './App.css';
import { ReducerExample } from './components/ReducerExample';

class App extends React.Component {
  render() {
    return (
      <>
      <Form/>
      {this.props.users && this.props.users.map(item => {
        return <div>{item}</div>
      })}
      <ReducerExample/>
      </>
    );
  }
}

const mapStateToProps = (state)  => {
  console.log(state)
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, null)(App);
