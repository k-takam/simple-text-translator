import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content is-centered">
            <p><strong>Simple Text Translator</strong> by k-takam.</p>
            <p>
              <a className="icon" href="https://github.com/k-takam/simple-text-translator">
                <i className="fa fa-github"></i>
              </a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}
