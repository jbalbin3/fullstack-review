import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import getUserRepos from './lib/getUserRepos.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }

  }

  // maybe for later
  // componentDidMount(){
  //   getTop25((data)=>{
  //     this.setState({repos: [data]});
  //   });
  // };

  search (term) {
    console.log(`${term} was searched`);
    getUserRepos(term);
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));