require ('./styles/style.scss');
import React from 'react';
import { render } from 'react-dom';
import Application from './components/Application';
import { BrowserRouter, Match } from 'react-router';


const Root = () => {
  return(
    <BrowserRouter>
      <section>
        <Match exactly pattern='/' component={ Application }/>
      </section>
    </BrowserRouter>
  )
}

render(<Root/>, document.getElementById('application'));
