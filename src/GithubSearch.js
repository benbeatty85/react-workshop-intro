import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch.bind(this)} />
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
  _handleSearch(searchTerm) {
      this.setState({
          user: searchTerm
      })
  }
     
}

export default GithubSearch;