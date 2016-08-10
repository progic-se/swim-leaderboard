export const GET_LEADERBOARD_REQUEST = "GET_LEADERBOARD_REQUEST";
export const GET_LEADERBOARD_RESPONSE = "GET_LEADERBOARD_RESPONSE";

export const getLeaderboardRequest = () => {
  return {
    type: GET_LEADERBOARD_REQUEST
  };
};

export const getLeaderboardResponse = (success, leaderboard) => {
  return {
    type: GET_LEADERBOARD_RESPONSE,
    leaderboard: leaderboard,
    success: success
  };
};
