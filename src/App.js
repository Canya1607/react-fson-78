import { useState } from 'react';
import './App.css';
import { Card } from './components/Card/Card';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Counter from './components/Counter/Counter';

function App({ special = false }) {
  const [clicked, setClicked] = useState(false);

  const className = clsx(
    'myText',
    {
      'special': special
    }
  )

  const bColor = clicked ? 'red' : 'blue';

  return (
    <div className='App'>
      <Card fName='Alex' sName='Hnennyi' />
      <p className={className} style={{ backgroundColor: bColor }}>
        My Text
      </p>
      <button onClick={() => setClicked(!clicked)}>Click me</button>
      <Counter startValue={1} />
    </div>
  );
}

App.propTypes = {
  special: PropTypes.bool
};

export default App;
