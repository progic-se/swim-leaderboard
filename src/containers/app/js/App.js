// React
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';

// Internal styling
require("../style/app.less");

class App extends Component {

  render() {

    const {children, dispatch} = this.props;

    return (
      <div>
        {children}
        <footer className="footer">
            <img src={require("../assets/img/owsc_logo.png") } />
            <img src={require("../assets/img/ProgicMail.png") } />
        </footer>
     </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {};
};

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
