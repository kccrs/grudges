import React, { Component } from 'react';

import GrudgeList from './GrudgeList';
import CreateGrudge from './CreateGrudge';

export default class Application extends Component {
  render() {
    return (
      <section className="Application">
        <h1>Who has Wronged Me?</h1>
        <CreateGrudge />
        <GrudgeList />
      </section>
    );
  }
}
