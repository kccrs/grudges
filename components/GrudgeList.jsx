import React, { Component } from 'react';
import Grudge from './Grudge';

const GrudgeList = ({ grudges }) => {
  if (grudges) {
    return (
      <section className="GrudgeList">
        <h1>Grudge List</h1>
        <ul className="AllTheGrudges">
          {this.props.grudges.map(g =>
            <Grudge
              id={g.id}
              offense={g.offense}
              name={g.name}
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
  } else {
    return (
      <section className='GrudgeList'>
        <h2>Looky there, no grudges!</h2>
      </section>
    )
  }
};

export default GrudgeList;
