export const getLeaderboard = () => {
  let url = "http://swim.eu-west-1.elasticbeanstalk.com/api/1/results";

  return fetch(url, {
  	method: 'get',
    headers: new Headers({
		    'Content-Type': 'application/json'
      })
  })
  .then((response) => {
    return response.json();
  });

  // return new Promise((resolve, reject) => {
  //   resolve(
  //     {
  //         "male": [
  //             {
  //                 "startNbr": 4,
  //                 "firstname": "Jens",
  //                 "lastname": "Lundberg",
  //                 "endTime": 30389,
  //                 "netTime": 30389,
  //                 "gender": "male"
  //             }
  //         ],
  //         "female": [
  //             {
  //                 "startNbr": 2,
  //                 "firstname": "Marina",
  //                 "lastname": "Nyman",
  //                 "endTime": 70389,
  //                 "netTime": 30389,
  //                 "gender": "female"
  //             },
  //             {
  //                 "startNbr": 3,
  //                 "firstname": "Malin",
  //                 "lastname": "Ripa",
  //                 "endTime": 120809,
  //                 "netTime": 20809,
  //                 "gender": "female"
  //             }
  //         ]
  //     }
  //   );
  // });
};
