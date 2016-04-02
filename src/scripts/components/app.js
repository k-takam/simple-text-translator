import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
import MenuContainer from '../containers/menu-container';
import InputTextContainer from '../containers/input-text-container';
import OutputTextContainer from '../containers/output-text-container';

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />

        <section className="section">
          <div className="container">
            <div className="columns is-multiline">
              <div className="column is-half">
                <p>テキストを日本語から英語へ翻訳します。</p>
              </div>
              <MenuContainer />
              <InputTextContainer />
              <OutputTextContainer />
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
