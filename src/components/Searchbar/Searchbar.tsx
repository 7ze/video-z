import * as React from 'react';
import './Searchbar.sass';

interface SearchbarProps {
  onSearchTermSubmit: (searchTerm: string) => void;
}

export const Searchbar: React.FC<SearchbarProps> = ({ onSearchTermSubmit }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchTermSubmit(searchTerm);
  };

  return (
    <div className="search-bar ui inverted segment">
      <div className="ui container">
        <form className="ui form" onSubmit={onFormSubmit}>
          <div className="field">
            <label htmlFor="Search Videos">Search Videos</label>
            <input
              type="text"
              placeholder="Search"
              onChange={onInputChange}
              value={searchTerm}
            />
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    </div>
  );
};
