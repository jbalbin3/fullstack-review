const request = require('request');
const config = require('../config.js');

let getReposByUsername = (userName, callback) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    url: `http://api.github.com/users/${userName}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  };
  request(options, (err, res, body) => {
    if(!err && res.statusCode == 200) {
      var data = JSON.parse(body);
      callback(data);
    } else {
      // TODO:
      // handle issue if username does not exist later
      // see server/index.js app.post to handle as well
      console.error('Error obtaining data from github api');
    }
  })
}

module.exports.getReposByUsername = getReposByUsername;