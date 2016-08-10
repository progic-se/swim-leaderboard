// React
import React, { Component, PropTypes } from 'react';

// Internal styling
require("../style/result.less");

export default class Result extends Component {
  render() {
    const { item } = this.props;

    if (item) {
      return (
        <div className="result">
          <div className="startnbr">
              {item.startNbr}
          </div>
          <div className="name">
              {item.firstname} {item.lastname}
          </div>
          <div className="time">
            {item.displayTime}
          </div>
        </div>
      );
    } else {
      return ( <div></div>);
    }
  }
}

// API requirements
Result.propTypes = {
    item: PropTypes.object.isRequired
};
