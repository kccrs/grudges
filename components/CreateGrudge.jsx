import React, { Component } from 'react';
import axios from 'axios';

export default class CreateGrudge extends Component {
  constructor() {
    super();
    this.state = {
      newGrudge: {},
    };
  }

  createGrudge(e) {
    e.preventDefault();
    let { name, offense } = e.target;
    axios.post('/grudges', {
      name: name.value,
      offense: offense.value,
      forgave: false,
    })
    .then((response) => {
      console.log(response, 'success');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <section className="CreateGrudge">
        <h1>Track that Grudge!</h1>
        <form
          id='GrudgeForm'
          name='create-grudge'
          onSubmit={(e)=> {
            this.createGrudge(e)
          }}
        >
          <label>
            The offender:
            <input placeholder='Who has wronged me?' name='name' aria-label='Name of the person who has wronged you.'/>
          </label>
          <label>
            The offense:
            <textarea placeholder='My god! What have they done?' name='offense' aria-label='Name of the offense done to you'/>
          </label>
          <section className="ButtonContainer">
            <button
              className='SubmitButton'
              type='submit'
            >
              Submit
            </button>
          </section>
        </form>
      </section>
    )
  }
}
