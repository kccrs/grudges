import React, { Component } from 'react';

export default class CreateGrudge extends Component {
  render() {
    return (
      <section className="CreateGrudge">
        <h1>Track that Grudge</h1>
        <form
          id='ProposalForm'
          name='create-spike'
          onSubmit={(e)=> {
            createSpike(e)
          }}
        >
          <label>
            The sinner:
            <input placeholder='Who has wronged me?' name='name' />
          </label>
          <label>
            The sin:
            <textarea placeholder='What have they done?' name='offense' />
          </label>
          <section className="ButtonContainer">
            <button
              className='SubmitButton'
              type='submit'
            >
              Submit
            </button>
            <button
              className='CancelButton'
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Cancel
            </button>
          </section>
        </form>
      </section>
    );
  }
}
