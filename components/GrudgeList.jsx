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
              forgave={g.forgave}
            />)
          }
        </ul>
      </section>
    );
  } else {
    return (
      <section className='GrudgeList'>
        <h2>Karma is in balance.</h2>
      </section>
    )
  }
};

export default GrudgeList;
