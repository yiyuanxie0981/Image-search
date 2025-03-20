import './SearchBar.css';
import { useState } from 'react';
import 'bulma/css/bulma.min.css';

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  return (
    <div className="section">
      <div className="container">
        <form onSubmit={handleFormSubmit}>
          <h1 className="title is-2 has-text-centered mb-5">Image Search</h1>
          <div className="field">
            <div className="control">
              <input 
                className="input is-large"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                placeholder="Enter search term..."
              />
              {!term && (
                <p className="help mt-2 has-text-centered">
                  Try searching for 'cars', 'nature', or 'coffee'
                </p>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBar;
