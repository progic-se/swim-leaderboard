// React
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// API
import { getLeaderboard } from '../../../api/leaderboard';

// Actions
import { getLeaderboardRequest, getLeaderboardResponse} from '../../../actions/leaderboard';

// components
import ResultList from "../../../components/resultList/js/ResultList";

// Internal Styling
require("../style/home.less");

class Home extends Component {



  componentWillMount() {
      const { dispatch, leaderboard, fetching } = this.props;

      const update = () => {
        console.log("Refresh");
        if (!fetching) {
          dispatch(getLeaderboardRequest());
          getLeaderboard()
          .then((leaderboard) => {
            dispatch(getLeaderboardResponse(true, leaderboard));
          })
          .catch((error) => {
            dispatch(getLeaderboardResponse(false));
          })
        }
      }

      update(dispatch, leaderboard, fetching);
      setInterval(update, 10000);
  }

  render() {

    const { leaderboard, fetching } = this.props;
    let divStyle = {
      backgroundImage: 'url(' + require("../assets/img/splash.jpg") + ')'
    };

    if (leaderboard) {
      return (
        <div className="home">
          <div className="splash" style={divStyle}>
            <span className="splash-title">Grymt kämpat!!</span>
          </div>

          <div className="owsc-info-container">
            <div className="owner-image">
              <img src={require("../assets/img/owsc_owners.jpg") } />
              </div>
              <div className="owner-text">
                Tusen tack till alla deltagare som gjorde detta fantastiska event möjligt
                <br/>
                <h3>Varmt välkomna nästa år igen!</h3>

              </div>
          </div>
          <div className="result-container">
              <div className="result-lists">
                <ResultList title="Resultat" items={leaderboard.all}></ResultList>
              </div>
          </div>
        </div>
        );
      } else {
        return (
          <div className="home">
            <div className="splash" style={divStyle}>
            </div>

            <div className="owsc-info-container">
              <div className="owner-image">
                <img src={require("../assets/img/owsc_owners.jpg") } />
                </div>
                <div className="owner-text">
                  Tusen tack till alla deltagare som gjorde detta fantastiska event möjligt
                  <br/>
                  <h3>Varmt välkomna nästa år igen!</h3>

                </div>
            </div>

            <div className="result-container">
                <div className="title">
                  Inga resultat inrapporterade än
                </div>
            </div>
          </div>
        );
      }
  }
}

const mapStateToProps = (state) => {
  return {
    leaderboard: state.leaderboardReducer.leaderboard,
    fetching: state.leaderboardReducer.fetching
  }
}
// API requirements
Home.propTypes = {
};

export default connect(mapStateToProps)(Home);
