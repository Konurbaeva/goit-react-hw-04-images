import { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button type="submit" className="button">
        <span className="button-label">Load more</span>
      </button>
    );
  }
}
