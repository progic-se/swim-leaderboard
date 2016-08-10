import {
  GET_LEADERBOARD_REQUEST,
  GET_LEADERBOARD_RESPONSE
} from '../actions/leaderboard';


const initialState = {
  leaderboard: undefined,
  fetching: false
};

const msToTime = (duration) => {
    let milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
}

const sortArrayByNetTime = (arr) => {
    arr.sort((a,b) => {
      if (a.endTime < b.endTime) {
        return -1;
      }
      if (a.endTime > b.endTime) {
        return 1;
      }

      return 0;
    })

    return arr;
}
const createLeadeboardModel = (leaderboard) => {

  leaderboard.all = sortArrayByNetTime(leaderboard.all);

  leaderboard.all.forEach((item) => {
    item.displayTime = msToTime(item.endTime);
  });


  return leaderboard;
}

const leaderboard = (state = initialState, action) => {
  switch(action.type) {
    case GET_LEADERBOARD_REQUEST:
      return Object.assign({}, state, {fetching: true});

    case GET_LEADERBOARD_RESPONSE:
      if (!action.success) {
          return Object.assign({}, state, {fetching: false});
      }

      let leaderboard = createLeadeboardModel(action.leaderboard);

      return Object.assign({}, state, {
        leaderboard: leaderboard,
        fetching: true
      });

      default:
        return state;
  }
};

export default leaderboard;
