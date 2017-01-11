import React, { Component } from 'react';

const Grudge = ({ grudge, updateCount }) => {

  if (grudge) {
    return (
      <section className="Grudge">
        <h1>A Single Grudge</h1>
        <p>Person being a real ding dong: <span>{grudge.name}</span></p>
        <p>what the hell were they thinking?: <span>{grudge.offense}</span></p>
        <section className="forgiveness">
          <p>Have I forgiven them? Should I?</p>
          <button
            className='ForgiveButton'
            onClick={() => {
              updateCount(grudge);
            }}>
            Forgive?
          </button>
        </section>
      </section>
    );
  }
}

export default Grudge;
