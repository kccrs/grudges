import React, { Component } from 'react';
import axios from 'axios';
import GrudgeList from './GrudgeList';
import Grudge from './Grudge';
import CreateGrudge from './CreateGrudge';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      grudges: [],
      offenders: 0,
      forgiven: 0,
      unforgiven: 0
    };
  }

  componentDidMount() {
    console.log(this.state.grudges);
    this.getGrudges();
  }

  getGrudges() {
    axios.get('/grudges')
    .then((response) => {
      this.setState({
        grudges: response.data.grudges
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  updateOffenders() {

  }

  render() {
    return (
      this.state.grudges ?
        <section className="Application">
          <header>
            <h1>Who has Wronged Me?</h1>
          </header>
          <CreateGrudge />
          <section className="all-questions">
            { this.state.grudges.map(g =>
              <Grudge
                offense={g.offense}
                name={g.name}
                forgave={g.forgave}
              />) }
          </section>
        </section>
          :
        <section className="Application">
          <header>
            <h1>Who has Wronged Me?</h1>
          </header>
          <CreateGrudge />
          <h3>There are no grudges</h3>
          <GrudgeList />
          <article className="GrudgeCounts">
            <p>How many of these ding dongs have wronged me?<span> {this.state.offenders}</span></p>
            <p>How many of these ding dongs have I forgiven?<span>{this.state.forgiven}</span></p>
            <p>How many of these ding dongs have yet to earn my forgiveness?<span>{this.state.unforgiven}</span></p>
          </article>
        </section>
    );
  }
}
