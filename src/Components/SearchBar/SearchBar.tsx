import * as React from 'react';
import './SearchBar.sass';

type State = {
  term: string;
};

type Props = {
  // onSubmit: () => void;
};

export class SearchBar extends React.Component<Props, State> {
  state: State = {
    term: '',
  };

  onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      term: event.target.value,
    });
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="Search Videos">Search Videos</label>
            <input
              type="text"
              placeholder="Search"
              onChange={this.onInputChange}
              value={this.state.term}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}
