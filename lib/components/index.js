import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

const App = () => { 
  return(
    <div className='app'>
      <h1>My React Config</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugit ullam illum omnis, quas similique? Accusamus, blanditiis soluta ad velit doloribus illo eos, fugiat sint quis, at aspernatur est maxime?</p>
    </div>
  )
};

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);