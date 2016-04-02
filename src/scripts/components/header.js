import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <div className="header-left">
            <h1 className="header-item">Simple Text Translator</h1>
          </div>
        </div>
      </header>
    );
  }
}
