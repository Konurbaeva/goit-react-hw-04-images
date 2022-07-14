import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(' handleSubmit is trigerred: ');
    this.props.onSubmit(this.state.searchQuery);
  };

  handleChange(e) {
    // this.setState({ searchQuery: e.target.value });
    this.setState({ searchQuery: e.currentTarget.value });
  }

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              // onChange={this.handleChange}
              onChange={e => this.handleChange(e)}
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
