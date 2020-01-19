const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
mongoose.Promise = require('bluebird');

// var mConnect = mongoose.connect('mongodb://localhost/fetcher', {
//   useMongoClient: true,
//   /* other options */
// });

// promise.then(function(db) {
//   /* Use `db`, for instance `db.model()`
// });

let repoSchema = mongoose.Schema({
  repo_id: { type: Number, unique: true, index: true },
  repo_name: { type: String, required: true, unique: true},
  repo_url: String,
  description: String,
  private: Boolean,
  forks: Number,
  owner_name: { type: String, required: true},
  owner_url: String,
  avatar_url: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (data) => {  // option to add callback if needed
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  data.forEach((repo)=> {
    var r = new Repo();
    r.repo_id = repo.id;
    r.repo_name = repo.name;
    r.repo_url = repo.html_url;
    r.description = repo.description;
    r.private = repo.private;
    r.forks = repo.forks;
    r.owner_name = repo.owner.login;
    r.owner_url = repo.owner.url;
    r.avatar_url = repo.owner.avatar_url;
    r.save();
  });

}

let topRepos = ()=> {
  return new Promise((resolve, reject)=>{
    Repo.find((err, repos)=>{
      if(err) {
        reject(err);
      } else {
        // console.log('topRepos ', repos);
        resolve(repos);
      }
    })
    .sort('-forks')
    .limit(25);
  });
}

module.exports.save = save;
module.exports.topRepos = topRepos;