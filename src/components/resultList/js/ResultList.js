// React
import React, { Component, PropTypes } from 'react';

// Components
import Result from "../../result/js/Result";

// Intenal styling
require("../style/resultList.less");

export default class ResultList extends Component {
  render() {

    const { items, title } = this.props;

    if (!items) {
      return (
        <div> Fetching items </div>
      )
    } else {
      return (
        <div className="result-list">
            <div className="title">
                {title}
            </div>
            <div className="table-titles">
              <div className="start-nbr">
                  Startnummer
              </div>
              <div className="name">
                  Deltagare
              </div>
              <div className="time">
                  Sluttid
              </div>
            </div>
          {
            items.map((item) => {
              return (
                <Result key={item.startNbr} item={item}></Result>
              );
            })
          }
        </div>
        );
    }
  }
}

// API requirements
ResultList.propTypes = {
    items: PropTypes.array.isRequired
};
