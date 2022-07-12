import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form">
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>
          </form>
        </header>
      </>
    );
  }
}
