import React, { Component } from 'react';

import GrudgeList from './GrudgeList';
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

  createGrudge(e) {
    e.preventDefault();
    let { title, description, grudgeDate, hosts, notes } = e.target;
    if (title.value && description.value && grudgeDate.value) {
      let grudge = {
        title: this.sanitizeInput(title.value),
        description: this.sanitizeInput(description.value),
        location: '',
        appr: false,
        createdAt: Date.now(),
        createdBy: this.sanitizeInput(user.email),
        hosts: this.sanitizeInput(hosts.value),
        attendees: [],
        grudgeDate: new Date(grudgeDate.value).getTime(),
        notes: this.sanitizeInput(notes.value)
      };
      reference.push(grudge);
      document.getElementById('ProposalForm').reset();
    } else {
      alert('description and title required');
    }
  }


  // updateCount(grudge) {
  //     const user = this.state.user;
  //     if (!grudge.attendees) {
  //       let attendees = [];
  //       attendees.push(user.email);
  //       this.updateSpike(grudge, 'attendees', attendees);
  //       this.updateAttending(grudge);
  //     }
  //     else if (grudge.attendees.includes(user.email)) {
  //       this.updateAttending();
  //     }
  //     else {
  //       let attendees = grudge.attendees.concat(user.email);
  //       this.updateSpike(grudge, 'attendees', attendees);
  //       this.updateAttending(grudge);
  //     }
  //   }

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
