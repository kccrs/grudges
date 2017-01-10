import React, { Component } from 'react';

const CreateGrudge = ({ grudge, createGrudge, updateCount }) => {

  return (
    <section className="CreateGrudge">
      <h1>Track that Grudge</h1>
      <form
        className='GrudgeForm'
        name='create-grudge'
        onSubmit={(e)=> {
          createGrudge(e)
        }}
      >
        <label>
          The sinner:
          <input placeholder='Who has wronged me?' name='name' />
        </label>
        <label>
          The sin:
          <textarea placeholder='My god! What have they done?' name='offense' />
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
  );
}
