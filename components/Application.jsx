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
      dingDongs: 0,
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

  postGrudges(e) {
    e.preventDefault();
    let { name, offense } = e.target;
    axios.post('/post', {
      name: name.value,
      offense: offense.value,
      forgave: false,
      createdAt: Date.now(),
    })
    .then((response) => {
      this.setState({
        grudges: response.data.grudges
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  createGrudge(e) {
    e.preventDefault();
    let { name, offense } = e.target;
    if (name.value && offense.value) {
      let grudge = {
        name: name.value,
        offense: offense.value,
        forgave: false,
        createdAt: Date.now(),
      };
      this.postGrudges(e);
      this.getGrudges();
    } else {
      alert('grudge info required');
    }
  }


  updateCount() {

  }


  render() {
    return (
      this.state.grudges ?
        <section className="Application">
          <h1>Who has Wronged Me?</h1>
          <CreateGrudge />
          <section className="all-questions">
            { this.state.grudges.map(g =>
              <Grudge
                offense={g.offense}
                name={g.name}
              />)}
          </section>
        </section>
          :
        <section>
          <h1>Who has Wronged Me?</h1>
          <CreateGrudge />
          <h3>There are no grudges</h3>
        </section>
    );
  }
}
