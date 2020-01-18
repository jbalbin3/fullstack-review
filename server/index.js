const express = require('express');
let app = express();
const git = require('../helpers/github.js');
const db = require('../database/index.js');

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json()); // needed for req.body to be parsed

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database
  // console.log('req.name ', req.body.name); // if username is sent json object style
  git.getReposByUsername(req.body.name, (data)=>{
    // console.log('GIT API ', data);
    // write to database
    // db.save(data);
    res.status(200).end();

  });
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

