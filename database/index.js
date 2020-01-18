const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/fetcher');
var promise = mongoose.connect('mongodb://localhost/fetcher', {
  useMongoClient: true,
  /* other options */
});

// promise.then(function(db) {
//   /* Use `db`, for instance `db.model()`
// });

let repoSchema = mongoose.Schema({
  // TODO: your schema here!

});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;