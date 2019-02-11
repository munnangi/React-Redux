import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/UserActions';
import { bindActionCreators } from 'redux';

class App extends Component {

// In react constructors are only used for two purposes
// * Initializing local state by assigning an object to this.this.state.
// * Binding event handler methods to an instance, which we are doing below.
// https://reactjs.org/docs/react-component.html#constructor
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }

  onUpdateUser({target}) {
    this.props.onUpdateUser(target.value);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <input type='text' onChange= {this.onUpdateUser}/>
          {this.props.user}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.products,
    user: state.users
}
};

// bindActionCreators turns an object whose values are action creators,
// into an object with the same keys, but with every action creator wrapped into
// a dispatch call, so they may be invoked directly.
const mapDispatchToProps = ( dispatch, props) => {
  return bindActionCreators(
    {
      onUpdateUser: updateUser
    }, dispatch
  );
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
