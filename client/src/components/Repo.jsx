import React from 'react';

const Repo = ({repo}) => (
  <div><a  href={repo.repo_url}>{repo.repo_name}</a></div>
)

export default Repo;