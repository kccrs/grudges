import React, { Component } from 'react';
import Grudge from './Grudge';

export default class GrudgeList extends Component {

  // const { updateCount, user } = this.props;
  // const { dateFilter } = this.state;
  // return map(spikes, (spike) => {
  //   if(spike.appr) {
  //       if(moment(spike.spikeDate).format('MM-DD-YYYY') === moment(dateFilter).format('MM-DD-YYYY')) {
  //       return (
  //         <Spike
  //           spike={spike}
  //           key={spike.key}
  //           updateCount={updateCount}
  //           user={user}
  //           attending={this.props.attending}
  //         />
  //       )
  //     }
  //   }

  render() {
    return (
      <section className="GrudgeList">
        <h1>Grudge List</h1>
        <ul className="AllTheGrudges">
          {this.props.grudges.map(g =>
            <Grudge
              key={g.key}
              grudge={g}
            />)
          }
        </ul>
        <article className="GrudgeCounts">
          <p>How many of these ding dongs have wronged me?</p>
          <p>How many of these ding dongs have I forgiven?</p>
          <p>How many of these ding dongs have yet to earn my forgiveness?</p>
        </article>
      </section>
    );
  }
}
