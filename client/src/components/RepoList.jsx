import React from 'react';
import Repo from './Repo.jsx';

const RepoList = ({topRepos}) => (
  <div>
    <h4>Top Repos</h4>
    <div>
    {topRepos.map((r)=>{
      return <Repo repo={r} key={r.repo_id}/>
    })}
    </div>
    There are {topRepos.length} repos.
  </div>
)

export default RepoList;