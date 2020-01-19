import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import getUserRepos from './lib/getUserRepos.js';
import getTopRepos from './lib/getTopRepos.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
    this.search = this.search.bind(this);
  }

  // show top 25
  componentDidMount(){
    getTopRepos((data)=>{
      this.setState({repos: data});
    });
  };

  search (term) {
    console.log(`${term} was searched`);
    getUserRepos(term, ()=>{
      alert(`${term} was searched`);
      this.componentDidMount();
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList topRepos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));