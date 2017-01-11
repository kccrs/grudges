import React from 'react';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      newGrudge: {},
    };
  }

  render() {

    return (
      <section className="CreateGrudge">
        <h1>Track that Grudge!</h1>
        <form
          id='GrudgeForm'
          name='create-grudge'
          onSubmit={(e)=> {
            console.log(this.props.grudges);
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
}
