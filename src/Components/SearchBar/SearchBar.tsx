import * as React from 'react';
import './SearchBar.sass';

type State = {
  searchTerm: string;
};

type Props = {
  onSearchTermSubmit: (term: string) => void;
};

export class SearchBar extends React.Component<Props, State> {
  state: State = {
    searchTerm: '',
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchTerm: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { onSearchTermSubmit } = this.props;
    onSearchTermSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="search-bar ui inverted segment">
        <div className="ui container">
          <form className="ui form" onSubmit={this.onFormSubmit}>
            <div className="field">
              <label htmlFor="Search Videos">Search Videos</label>
              <input
                type="text"
                placeholder="Search"
                onChange={this.onInputChange}
                value={this.state.searchTerm}
              />
              <i className="search icon"></i>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
